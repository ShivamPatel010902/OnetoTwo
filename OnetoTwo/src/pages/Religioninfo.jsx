import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";


export function Religioninfo() {
    const religion = ['Hinduism', 'Islam', 'Buddhism', 'Sikhism', 'Christianity']
    const community = ['Hindi', 'English', 'Punjabi', 'Bengali', 'Urdu']
    const country = ['USA', 'India', 'Bhutan', 'Australia', 'Japan']

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
                            Religion Info
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Select label="Your Religion" menuProps={{ className: "h-48" }}>
                            {religion.map((name) => (
                                <Option key={name} value={name}>
                                    {name}
                                </Option>
                            ))}
                        </Select>
                        <Select label="Community" menuProps={{ className: "h-48" }}>
                            {community.map((name) => (
                                <Option key={name} value={name}>
                                    {name}
                                </Option>
                            ))}
                        </Select>
                        <Select label="Country" menuProps={{ className: "h-48" }}>
                            {country.map((name) => (
                                <Option key={name} value={name}>
                                    {name}
                                </Option>
                            ))}
                        </Select>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link
                            to='/register/contactinfo'
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

export default Religioninfo;
