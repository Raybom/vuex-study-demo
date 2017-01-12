
const store = {
    state: {
        starList: [{
            title: "掘金",
            href: "https://gold.xitu.io/"
        },{
            title: "GitHub",
            href: "https://github.com/"
        },{
            title: "SegmentFault",
            href: "https://segmentfault.com/"
        }]
    },
    mutations: {
        addStarList(state,obj) {
            state.starList.push(obj)
        }
    }
}

module.exports = store