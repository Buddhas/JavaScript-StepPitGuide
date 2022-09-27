var restoreIpAddresses = function(s) {

    const result = []
    const isVal = (position) => {
        if (position.length < 3) return
        const x1 = s.slice(0, position[0] + 1)
        const x2 = s.slice(position[1] + 1, position[2] + 1)
        const x3 = s.slice(position[2] + 1, position[3] + 1)
        const x4 = s.slice(position[3])
        if (test(x1) && test(x2) && test(x3) && test(x4)) {
            result.push(`${x1}.${x2}.${x3}.${x4}`)
        }
    }
    const test = (x) => {
        if ((x.length > 0 && x[0] == 0)) {
            return false
        }
        if (0 <= Number(x) <= 255) {
            return true
        }
        return false
    }

    const bfs = (str, position, pre) => {
        for (let i = 0; i < str.length; i++) {
            position.push(pre + i)
            isVal(position)
            if (position.length < 3) {
                bfs(str.slice(i + 1), position, pre + i)
            }
            position.pop()
        }
    }
    bfs(s, [], 0)
    return result
};

restoreIpAddresses("25525511135")



var restoreIpAddresses = function(s) {
    let res = [];
    dfs(s, 0, 0, '');
    return res;

    function dfs(ip, idx, num, path) {
        if (num > 4) return;
        //当前已经划分为4段（num从0~3，所以退出条件为4）并且已经搜索到ip地址的最后一位则存入结果
        if (num === 4 && idx === ip.length) {
            res.push(path);
        }
        for (let i = 1; i < 4; i++) {
            let str = ip.substring(idx, idx + i);
            if (str[0] === '0' && str.length > 1 || Number(str) > 255) return;
            dfs(ip, idx + i, num + 1, path + str + (num === 3 ? '' : '.'));
        }
    }
};