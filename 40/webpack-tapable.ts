interface Taps {
    fn: () => any;
    name: string;
}
interface IHooks {
    start: AsyncHook
}
class Tapable {
    protected taps: Taps[] = [];
    public tab(name: string, fn: () => any) {
        const tap = {
            name,
            fn
        }
        if (this.taps.length === 0) {
            this.taps = [tap]
        } else {
            this.taps.push(tap)
        }
    }
    protected getTaps() {
        return this.taps
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333t5yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy455555555555555555555
}

class AsyncHook extends Tapable {
    public async call() {
        for (const item of this.getTaps()) {
            await item.fn();
        }
    }
}

class SyncHook extends Tapable {
    public call() {
        for (const item of this.getTaps()) {
            item.fn();
        }
    }
}

class Hooks implements IHooks {
    public start = new AsyncHook();
    public sync = new SyncHook();
}

const hooks = new Hooks()
hooks.start.tab('test', () => { new Promise((resolve) => {
    setTimeout(() => {
        console.log(2)
        resolve(1)
    }, 10); })
})

hooks.sync.tab('test', () => { new Promise((resolve) => {
    setTimeout(() => {
        console.log(1)
        resolve(1)
    }, 10); })
})
hooks.sync.call()
hooks.start.call()