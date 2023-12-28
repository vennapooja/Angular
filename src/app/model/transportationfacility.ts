export class Transportationfacility {
    id:number;
    transportationType:string;
    convenience:string;
    minCostPerRide:number;
    rating:number;
    image:string;

    constructor( id:number,transportationType:string,convenience:string,minCostPerRide:number,rating:number,image:string)
    {
        this.id=id;
        this.transportationType=transportationType;
        this.convenience=convenience;
        this.minCostPerRide=minCostPerRide;
        this.rating=rating;
        this.image=image;
        
    }

}
