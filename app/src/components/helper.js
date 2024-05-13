export const getInitial = (name) => {
    if(name){
        let arr = name.split(' ')
        let initial = arr[0][0] + arr[1][0]
        return initial;
    }
}