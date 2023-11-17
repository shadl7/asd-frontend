class AutoSaver {
    timeout;
    saveFunc;
    constructor(save, content) {
        this.saveFunc = save
        this.updateSaver(content)
    }
    async updateSaver(content) {
        if (this.timeout !== undefined && this.timeout !== null) {
            clearTimeout(this.timeout)
        }
        if (content !== null) {
            this.timeout = setTimeout(() => {
                this.saveFunc(content)
            }, 1000)
        }
    }
}

export default AutoSaver;