const translations = {
    en: {
        title: "'s MBTI Questionnaire ",
        introduction: " According to real-life interactions ,you can answer with 4 different dimensions from MBTI to describe how you perceive ",
        email: "Your given name",
        relation: "How much do you think you know him/her? Please choose the graph that best describes your familiarity.",
        ie: "I/E Type    ",
        ieTooltip: "I type: Introverts are energized by spending quiet time alone or with a small group. They tend to be more reserved and thoughtful. \nE type: Extraverts are energized by spending time with people and in busy, active surroundings. They tend to be more expressive and outspoken.",
        ns: "N/S Type    ",
        nsTooltip: "S type: Sensors focus on their five senses and are interested in information they can directly see, hear, feel, and so on. They tend to be hands-on learners and are often described as practical.\n N type: Intuitives focus on a more abstract level of thinking; they are more interested in theories, patterns, and explanations. They are often more concerned with the future than the present and are often described as creative",
        ft: "F/T Type    ",
        ftTooltip: "T type: Thinkers tend to make decisions with their heads; they are interested in finding the most logical, reasonable choice.\nF type: Feelers tend to make decisions with their hearts; they are interested in how a decision will affect people, and whether it fits in with their values.",
        jp: "J/P Type    ",
        jpTooltip: "J type: Judgers appreciate structure and order; they like things planned, and dislike last-minute changes.\n P type: Perceivers appreciate flexibility and spontaneity; they like to leave things open so they can change their minds.",
        submit: "Submit"
    },
    zh: {
        title: "的MBTI问卷",
        introduction: "根据实际生活中的互动，你可以用MBTI的四个不同维度来回答，描述你如何感知",
        email: "您的名",
        relation: "你认为你对他/她有多少了解？请选择最能体现您對他的熟悉程度的圖",
        ie: "I/E 类型    ",
        ieTooltip: "I 型：内向的人喜欢独自一人或与一小群人一起度过安静的时光，从而获得活力。他们往往更加内敛和深思熟虑。\n E 型：外向的人喜欢与人相处，喜欢在忙碌、活跃的环境中度过时光，从而获得活力。他们往往更善于表达和直言不讳。",
        ns: "N/S 类型    ",
        nsTooltip: "S 型：感知型专注于五种感官，对可以直接看到、听到、感觉到的信息感兴趣。他们往往是动手学习者，通常被描述为实践型。\n N 型：直觉型专注于更抽象的思维水平；他们对理论、模式和解释更感兴趣。他们通常更关心未来而不是现在，通常被描述为富有创造力",
        ft: "F/T 类型    ",
        ftTooltip: "T 型：思考者倾向于用头脑做决定；他们感兴趣的是找到最合乎逻辑、最合理的选择。\nF 型：感受者倾向于用心做决定；他们感兴趣的是这个决定会如何影响人们，以及这个决定是否符合他们的价值观。",
        jp: "J/P 类型    ",
        jpTooltip: "J 型：判断者欣赏结构和秩序；他们喜欢有计划的事情，不喜欢最后一刻的变化。\n P 型：感知者欣赏灵活性和自发性；他们喜欢让事情保持开放，以便他们可以改变主意。",
        submit: "提交"
    },
    ko: {
        title: "의MBTI 설문지",
        introduction: "MBTI의 4가지 차원을 사용하여 실제 상호작용을 기반으로 어떻게 인식하는지 설명할 수 있습니다, ",
        email: "당신의 이름:",
        relation: "당신은 그/그녀를 얼마나 알고 있다고 생각하시나요?가장 두 분의 친밀한 관계를 잘 나타내는 사진을 선택해 주세요 - 당신과",
        ie: "I/E 종류    ",
        ieTooltip: "I 유형: 내성적인 사람은 혼자 또는 소규모 그룹과 함께 조용한 시간을 보내는 것으로 활력을 얻습니다. 그들은 보다 내성적이고 사려 깊은 경향이 있습니다. \nE 유형: 외향적인 사람은 사람들과 바쁘고 활동적인 환경에서 시간을 보내는 것으로 활력을 얻습니다. 그들은 보다 표현력이 풍부하고 직설적인 경향이 있습니다.",
        ns: "N/S 종류    ",
        nsTooltip: "S 유형: 센서는 오감에 초점을 맞추고 직접 보고, 듣고, 느낄 수 있는 정보에 관심이 있습니다. 그들은 실습 학습자이며 종종 실용적이라고 묘사됩니다.\n N 유형: 직관형은 보다 추상적인 수준의 사고에 초점을 맞춥니다. 그들은 이론, 패턴 및 설명에 더 관심이 있습니다. 그들은 종종 현재보다 미래에 더 관심이 있으며 종종 창의적이라고 묘사됩니다.",
        ft: "F/T 종류    ",
        ftTooltip: "T형: 사고형은 머리로 결정을 내리는 경향이 있습니다. 그들은 가장 논리적이고 합리적인 선택을 찾는 데 관심이 있습니다.\nF형: 감정형은 마음으로 결정을 내리는 경향이 있습니다. 그들은 결정이 사람들에게 어떤 영향을 미칠지, 그리고 그것이 자신의 가치에 부합하는지에 관심이 있습니다.",
        jp: "J/P 종류    ",
        jpTooltip: "J 유형: 판단자는 구조와 질서를 중시합니다. 계획을 좋아하고 마지막 순간의 변화를 싫어합니다. P 유형: 인식자는 유연성과 자발성을 중시합니다. 마음을 바꿀 수 있도록 상황을 열어두는 것을 좋아합니다.",
        submit: "제출"
    }
};
function changeLanguage(lang) {
    console.log("Applying language:", lang);

    if (!translations[lang]) {
        console.error("Language translation not found for:", lang);
        return;
    }

    const translation = translations[lang];

    // **存储用户语言偏好**
    localStorage.setItem("selectedLanguage", lang);

    // **✅ 只更新 "MBTI Questionnaire for"，不修改 username**
    const username = document.getElementById("username").textContent;
    document.getElementById("form-title").innerHTML = `<span id="username">${username}</span>${translation.title} `;
    // **更新其他内容**
    // document.getElementById("introduction").textContent = translation.introduction;
    document.getElementById("introduction").innerHTML = `${translation.introduction}<span id="username">${username}</span>.`;
    document.getElementById("label-email").textContent = translation.email;
    document.getElementById("relation").innerHTML = `${translation.relation}`;

    document.getElementById("label-ie").textContent = translation.ie;
    document.getElementById("tooltip-ie").textContent = translation.ieTooltip;
    document.getElementById("label-ns").textContent = translation.ns;
    document.getElementById("tooltip-ns").textContent = translation.nsTooltip;
    document.getElementById("label-ft").textContent = translation.ft;
    document.getElementById("tooltip-ft").textContent = translation.ftTooltip;
    document.getElementById("label-jp").textContent = translation.jp;
    document.getElementById("tooltip-jp").textContent = translation.jpTooltip;
    document.getElementById("submit-button").textContent = translation.submit;
}
