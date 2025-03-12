from flask import Flask, render_template, request, redirect, url_for
import qrcode
import os
import uuid
import pandas as pd

app = Flask(__name__)

DATA_DIR = "data"
os.makedirs(DATA_DIR, exist_ok=True)

# In-memory storage for questionnaire data
questionnaire_data = {}

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/dashboard', methods=['POST'])
def dashboard():
    username = request.form['username']
    return render_template('dashboard.html', username=username)

@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    username = request.form.get('username')
    social = request.form['social']
    intimacy = request.form['intimacy']
    known_time = request.form['known_time']
    
    # Generate unique ID and store questionnaire info
    unique_id = str(uuid.uuid4())
    questionnaire_data[unique_id] = {
        'username': username,
        'social': social,
        'intimacy': intimacy,
        'known_time': known_time
    }
    
    # Create a URL for the questionnaire
    questionnaire_url = f"http://127.0.0.1:5000/questionnaire/{unique_id}"
    
    # Generate QR code for the URL
    qr_image = qrcode.make(questionnaire_url)
    qr_path = f"static/qr_codes/{unique_id}.png"
    qr_image.save(qr_path)
    
    return render_template('dashboard.html', username=username, qr_code_url=qr_path)

@app.route('/questionnaire/<unique_id>')
def questionnaire(unique_id):
    # Retrieve questionnaire data based on unique ID
    if unique_id not in questionnaire_data:
        return "Invalid Questionnaire Link", 404
    data = questionnaire_data[unique_id]
    return render_template('questionnaire.html', username=data['username'], 
                           social=data['social'], intimacy=data['intimacy'], known_time=data['known_time'])

@app.route('/submit_questionnaire', methods=['POST'])
def submit_questionnaire():
    unique_id = request.form['unique_id']
    ie = request.form['ie']
    ns = request.form['ns']
    ft = request.form['ft']
    jp = request.form['jp']
    
    if unique_id not in questionnaire_data:
        return "Invalid Submission", 404

    username = questionnaire_data[unique_id]['username']
    excel_path = os.path.join(DATA_DIR, f"{username}.xlsx")
    
    # Save responses to Excel
    data = {
        "Unique ID": [unique_id],
        "Social Type": [questionnaire_data[unique_id]['social']],
        "Intimacy": [questionnaire_data[unique_id]['intimacy']],
        "Known Time": [questionnaire_data[unique_id]['known_time']],
        "I/E": [ie], "N/S": [ns], "F/T": [ft], "J/P": [jp]
    }
    df = pd.DataFrame(data)
    if os.path.exists(excel_path):
        existing = pd.read_excel(excel_path)
        df = pd.concat([existing, df], ignore_index=True)
    df.to_excel(excel_path, index=False)
    
    return render_template('thank_you.html')


if __name__ == '__main__':
    app.run(debug=True, port=5001)