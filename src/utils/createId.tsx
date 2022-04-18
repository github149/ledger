let id = parseInt(window.localStorage.getItem('index') || '0')
export default function generateId(){
    id+=1
    window.localStorage.setItem('index',JSON.stringify(id))
    return id
}