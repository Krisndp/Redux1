export function getData(){
    return { type:'GET_DATA' }
}

export function add(value){
    return { type: 'ADD', value}
}

export function sub(value){
    return { type: 'SUB', value}
}

export function errorZero(){
    return { type: 'LESS_THAN_ZERO'}
};

export function error(){
    return { type: 'ERROR'}
};

export function changeValue(){

}