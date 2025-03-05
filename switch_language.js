const translations = {
    en: {
        title: "MBTI Questionnaire  - ",
        introduction: "This is an MBTI perception form; you can answer how you perceive him/her in 4 different aspects according to real-life interactions.",
        email: "Your email or nickname:",
        relation: "Please choose the graph that best describes your relationship closeness with",
        ie: "I/E Percentage:",
        ieTooltip: "I: Introversion, E: Extraversion",
        ns: "N/S Percentage:",
        nsTooltip: "N: Intuition, S: Sensing",
        ft: "F/T Percentage:",
        ftTooltip: "F: Feeling, T: Thinking",
        jp: "J/P Percentage:",
        jpTooltip: "J: Judging, P: Perceiving",
        submit: "Submit"
    },
    zh: {
        title: "MBTI问卷 -",
        introduction: "这是一个 MBTI 感知表单，您可以根据现实生活中的互动，回答您对他/她的 4 个方面的看法。",
        email: "您的邮箱或昵称：",
        relation: "请选择最能体现您俩关系亲密程度的图片-您与",
        ie: "I/E 百分比：",
        ieTooltip: "I: 内向, E: 外向",
        ns: "N/S 百分比：",
        nsTooltip: "N: 直觉, S: 现实",
        ft: "F/T 百分比：",
        ftTooltip: "F: 感性, T: 理性",
        jp: "J/P 百分比：",
        jpTooltip: "J: 判断, P: 感知",
        submit: "提交"
    },
    ko: {
        title: "MBTI 설문지 -",
        introduction: "이것은 MBTI 인식 설문지입니다. 실제 생활 상호작용을 기반으로 그/그녀를 어떻게 인식하는지 4가지 측면에서 답변할 수 있습니다.",
        email: "이메일 또는 닉네임:",
        relation: "가장 두 분의 친밀한 관계를 잘 나타내는 사진을 선택해 주세요 - 당신과",
        ie: "I/E 퍼센트:",
        ieTooltip: "I: 내향, E: 외향",
        ns: "N/S 퍼센트:",
        nsTooltip: "N: 직관, S: 감각",
        ft: "F/T 퍼센트:",
        ftTooltip: "F: 감정, T: 사고",
        jp: "J/P 퍼센트:",
        jpTooltip: "J: 판단, P: 인식",
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
    document.getElementById("form-title").innerHTML = `${translation.title} <span id="username">${username}</span>`;
    // **更新其他内容**
    document.getElementById("introduction").textContent = translation.introduction;
    document.getElementById("label-email").textContent = translation.email;
    document.getElementById("relation").innerHTML = `${translation.relation} <span id="username">${username}</span>`;

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
