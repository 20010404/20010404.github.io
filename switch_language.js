const translations = {
    en: {
        title: "MBTI Questionnaire",
        introduction: "This is a MBTI perception form; you can answer how you perceive him/her in 4 different aspects in real life and interactions:)",
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
        title: "MBTI问卷",
        introduction: "这是MBTI感知表，你可以从四个不同方面回答你在现实生活和交往中对他/她的看法：)",
        ie: "I/E 百分比:",
        ieTooltip: "I: 内向, E: 外向",
        ns: "N/S 百分比:",
        nsTooltip: "N: 直觉, S: 感觉",
        ft: "F/T 百分比:",
        ftTooltip: "F: 情感, T: 思考",
        jp: "J/P 百分比:",
        jpTooltip: "J: 判断, P: 知觉",
        submit: "提交"
    },
    ko: {
        title: "MBTI 설문지",
        introduction: "이것은 MBTI 인식 유형입니다. 실제 생활과 상호작용에서 그/그녀를 4가지 측면에서 어떻게 인식하는지 답할 수 있습니다:)",
        ie: "I/E 백분율:",
        ieTooltip: "I: 내향성, E: 외향성",
        ns: "N/S 백분율:",
        nsTooltip: "N: 직관, S: 감각",
        ft: "F/T 백분율:",
        ftTooltip: "F: 감정, T: 사고",
        jp: "J/P 백분율:",
        jpTooltip: "J: 판단, P: 인식",
        submit: "제출"
    }
};

function changeLanguage() {
    const language = document.getElementById("language").value;
    const translation = translations[language];

    document.getElementById("form-title").textContent = translation.title;
    document.getElementById("introduction").textContent = translation.introduction;
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