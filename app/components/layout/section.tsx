import Container from "./container";

interface Props{

children:React.ReactNode;

}

export default function Section({

children,

}:Props){

return(

<section>

<Container>

{children}

</Container>

</section>

);

}