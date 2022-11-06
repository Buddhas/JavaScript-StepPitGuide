var restoreIpAddresses = function (s) {
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