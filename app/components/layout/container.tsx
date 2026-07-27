import { cn } from "../../lib/utils";

interface Props{

children:React.ReactNode;

className?:string;

}

export default function Container({

children,

className,

}:Props){

return(

<div

className={cn(

"mx-auto w-full max-w-[1600px] px-6 md:px-10 xl:px-16",

className

)}

>

{children}

</div>

);

}