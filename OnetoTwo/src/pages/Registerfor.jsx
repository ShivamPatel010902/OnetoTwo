import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";


export function Registerfor() {

    const relations = ["YourSelf", "For Son", "For Daughter", "Other"]
    return (
        <>
            <img
                src="/img/background-2.jpg"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Register
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Select label="Register For" menuProps={{ className: "h-48" }}>
                            {relations.map((name) => (
                                <Option key={name} value={name}>
                                    {name}
                                </Option>
                            ))}
                        </Select>
                        <Input variant="standard" type="text" label="Gender" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link
                            to='/register/personalinfo'
                            className="flex items-center gap-1 p-1 font-normal"
                        >
                            <Button variant="gradient" fullWidth>
                                Continue
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
                <SimpleFooter />
            </div>
        </>
    );
}

export default Registerfor;
