export default function isValid(username,address){
    const {housenumber, street, city , state, country, pincode} = address;
    return ( username && housenumber && street && city && country && pincode ) ? true : false ;
}