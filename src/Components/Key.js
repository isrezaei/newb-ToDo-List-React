
function MakeKey(){
    let Key = 0
    return ()=>{
        return Key++
    }
}

export default MakeKey()