import { SocialButtons } from "./social-buttons";

export function Subscribe() {
    return <div className="relative flex flex-col items-center w-screen h-screen p-4 lg:p-16">
        <div className="text-center section-title">Get Started</div>
        <div className="mt-4 text-white/50">Stay Ahead of the Game: Subscribe to Receive the Latest Updates from EnReach!</div>
        <div className="flex flex-col gap-2 mt-8 mb-8 lg:flex-row">
            <input className="w-full h-12 px-4 border rounded-full bg-black/10 lg:w-60 border-white/10" placeholder="Enter your email" />
            <button className="bg-white text-black py-[10px] px-6 rounded-full text-xl mr-4 font-semibold w-full lg:w-auto">Subscribe</button>
        </div>

        <SocialButtons />
    </div>
}