export enum SelectedPage {
    Home = "home",
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
}

export interface BenefitType {
    icon : JSX.Element;
    title: string;
    description: string;
}

export interface ClassTypes{
    name: string,
    description?:string, // it can be null. 
    image: string,
}