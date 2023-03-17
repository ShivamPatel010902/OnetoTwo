import React, { useState } from 'react'
import { TeamCard } from "@/widgets/cards";
import { teamData } from "@/data";
import { PageTitle, Footer } from "@/widgets/layout";
import {
    Select,
    Option,
    Card,
    CardBody,
    CardFooter,
    Button
} from "@material-tailwind/react";

export function BrowesProfiles() {
    const [selectfield, setSelectfield] = useState()


    const religion = ['Hindu', 'Islam', 'Buddhism', 'Sikhism', 'Christianity']
    const age = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    const city = ["Bhopal", "Indore", "Jabalpur", "Mumbai", "Delhi", "Pune", "Bengluru"]
    const education = ["B.Tech", "B.Com", "BA", "P.hd", "M.Tech", "Developer", "Teacher"]
    const community = ["Hindi", "English", "Punjabi", "Telgu", "Urdu"]

    const filteredteamData = teamData.filter(member => {
        return member.age == selectfield || member.city === selectfield || member.education === selectfield || member.religion === selectfield || member.community === selectfield;
    });

    return (
        <>
            <section className="px-4 pt-28 pb-48 bg-blue-gray-100">
                <div className="container mx-auto">
                    <PageTitle heading="Browes Profiles According Your Preferences">
                    </PageTitle>
                    <div className="container mx-auto p-4 m-4">
                        <form className="flex flex-wrap -mx-5 mb-2">

                            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Seacrh by Age
                                </label>

                                <select
                                    value={selectfield}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={e => setSelectfield(e.target.value)}>
                                    {age.map((value) => (
                                        <option value={value} key={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Search by City
                                </label>
                                <select
                                    value={selectfield}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={e => setSelectfield(e.target.value)}>
                                    {city.map((value) => (
                                        <option value={value} key={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Search by Education
                                </label>
                                <select
                                    value={selectfield}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={e => setSelectfield(e.target.value)}>
                                    {education.map((value) => (
                                        <option value={value} key={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Search by Religion
                                </label>
                                <select
                                    value={selectfield}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={e => setSelectfield(e.target.value)}>
                                    {religion.map((value) => (
                                        <option value={value} key={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Search by Community
                                </label>
                                <select
                                    value={selectfield}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={e => setSelectfield(e.target.value)}>
                                    {community.map((value) => (
                                        <option value={value} key={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </form>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {filteredteamData.map(({ img, name, userid, religion, community, city, age, education }) => (
                            <TeamCard
                                key={name}
                                img={img}
                                userid={userid}
                                name={name}
                                age={age}
                                city={city}
                                education={education}
                                religion={religion}
                                community={community}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
    )
}

export default BrowesProfiles;