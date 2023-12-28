export class Transportationfacility {
    Id:number;
    transportationType:string;
    Convenience:string;
    MinCostPerRide:number;
    Rating:number;
    image:string;

    constructor( Id:number,transportationType:string,Convenience:string,MinCostPerRide:number,Rating:number,image:string)
    {
        this.Id=Id;
        this.transportationType=transportationType;
        this.Convenience=Convenience;
        this.MinCostPerRide=MinCostPerRide;
        this.Rating=Rating;
        this.image=image;
        
    }

}
