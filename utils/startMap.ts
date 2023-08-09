const result = (l:number)=>{
        const r: any = []
            for (let j =0;j<l;j++){
            r[j] =[]
                for (let i =0;i<l;i++){
                    r[j].push('SPACE')
                }
            }
    return r
}
export default result