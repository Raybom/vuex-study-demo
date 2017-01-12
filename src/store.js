
const store = {
    state: {
        starList: [{
            title: "掘金",
            href: "https://gold.xitu.io/"
        },{
            title: "GitHub",
            href: "https://github.com/"
        },{
            title: "Google翻译",
            href: "https://translate.google.cn/"
        }]
    },
    mutations: {
        addStarList(state,obj) {
            state.starList.push(obj)
        }
    }
}

module.exports = store