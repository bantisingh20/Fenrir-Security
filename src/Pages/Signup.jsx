import React from "react";

export default function Signup() {
    return (
        <div className="min-h-screen flex bg-[#0b0f14] relative overflow-hidden">

            <div className="flex w-full max-w-7xl ml-20 items-center justify-between">

                <div className="text-white flex flex-col ">
                    <div className="flex items-center gap-2 mb-10">
                        <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                        <span className="text-gray-300 font-medium">aps</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Expert level Cybersecurity <br />
                        in <span className="text-teal-400">hours</span> not weeks.
                    </h1>

                    <div className="mt-10">
                        <p className="text-gray-300 mb-4">What's included</p>

                        <ul className="space-y-3 text-gray-400">
                            <li className="flex gap-3">
                                <Tick /> Effortlessly spider and map targets to uncover hidden security flaws
                            </li>
                            <li className="flex gap-3">
                                <Tick /> Deliver high-quality, validated findings in hours
                            </li>
                            <li className="flex gap-3">
                                <Tick /> Generate enterprise-grade security reports automatically
                            </li>
                        </ul>
                    </div>

                    {/* TRUST SECTION */}
                    <div className="mt-12 text-sm text-gray-400">
                        <p className="text-teal-400 font-medium">★ Trustpilot</p>
                        <p className="mt-1">
                            Rated <span className="text-white">4.5/5.0</span> (100k+ reviews)
                        </p>
                    </div>
                </div>
                {/* i wnt this to full righ side */}
                <div className="flex justify-end items-end mr-10">
                    <div
                        className="
      w-full max-w-md bg-white/90 backdrop-blur-xl  rounded-2xl shadow-2xl  p-5 sm:p-6  flex flex-col justify-between "
                    >
                        <h2 className="text-2xl font-semibold text-center text-gray-800">
                            Sign up
                        </h2>

                        <p className="text-center text-sm text-gray-500 mt-1">
                            Already have an account?{" "}
                            <a href="#" className="text-teal-600 font-medium">
                                Log in
                            </a>
                        </p>

                        <form className="mt-6 space-y-4">
                            <Input placeholder="First name*" type="text" />
                            <Input placeholder="Last name*" type="text" />
                            <Input placeholder="Email address*" type="email" />
                            <Input placeholder="Password (8+ characters)*" type="password" />

                            <label className="flex gap-2 text-xs text-gray-600">
                                <input type="checkbox" className="" />

                                <span>
                                    I agree to the App's <a className="text-blue-600">Terms & Conditions</a> and acknowledge that I have read the
                                    <a className="text-blue-600"> Privacy Policy</a>.
                                </span>

                            </label>

                            <button
                                className="w-full bg-teal-500 hover:bg-teal-600
                text-white py-3 rounded-full font-medium transition"
                            >
                                Create account
                            </button>
                        </form>

                        <div className="flex gap-3 mt-6">
                            <button style={{ background: '#000000' }} className="flex-1 bg-zinc-600  
                rounded-full py-2 font-semibold text-gray-700 transition flex items-center justify-center gap-2">
                                <Apple />
                            </button>

                            <button style={{ background: '#f9f2ef' }} className="flex-1 bg-zinc-600  
                rounded-full py-2 font-semibold text-gray-700 transition flex items-center justify-center gap-2">
                                <Google />
                            </button>

                            <button style={{ background: '#3d6ddf' }} className="flex-1 bg-zinc-600  
                rounded-full py-2 font-semibold text-gray-700 transition flex items-center justify-center gap-2">
                                <Meta />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Components ---------- */

const Input = ({ placeholder, type = "text" }) => (
    <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-3
    focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
    />
);

const Tick = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="teal" width="20" height={20}>
        <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>

);

const Apple = () => (
    <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024" width="24" height="24" fill="#ffffff" >
        <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7m-105.1-305c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7" />
    </svg>
);

const Google = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"  ><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>

);

const Meta = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24" fill="#ffffff">

        <path d="M640 381.9C640 473.2 600.6 530.4 529.7 530.4C467.1 530.4 433.9 495.8 372.8 393.8L341.4 341.2C333.1 328.7 326.9 317 320.2 306.2C300.1 340 273.1 389.2 273.1 389.2C206.1 505.8 168.5 530.4 116.2 530.4C43.4 530.4 0 473.1 0 384.5C0 241.5 79.8 106.4 183.9 106.4C234.1 106.4 277.7 131.1 328.7 195.9C365.8 145.8 406.8 106.4 459.3 106.4C558.4 106.4 640 232.1 640 381.9zM287.4 256.2C244.5 194.1 216.5 175.7 183 175.7C121.1 175.7 69.2 281.8 69.2 385.7C69.2 434.2 87.7 461.4 118.8 461.4C149 461.4 167.8 442.4 222 357.6C222 357.6 246.7 318.5 287.4 256.2zM531.2 461.4C563.4 461.4 578.1 433.9 578.1 386.5C578.1 262.3 523.8 161.1 454.9 161.1C421.7 161.1 393.8 187 360 239.1C369.4 252.9 379.1 268.1 389.3 284.5L426.8 346.9C485.5 441 500.3 461.4 531.2 461.4z" /></svg>
);