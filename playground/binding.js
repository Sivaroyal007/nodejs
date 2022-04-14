const event = {
    name:'siva',
    companys:['andrew','anudhim','lilly'],
    printcompanys(){
        console.log('my comps'+ this.name)
        this.companys.forEach((guest) => {
            console.log(guest+'is marriage'+this.name)
            
        });
    }
}
event.printcompanys()