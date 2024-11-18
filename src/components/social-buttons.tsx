import { IconDiscord, IconTelegram, IconX } from "../icons"


const socialLinks = [
    { label: 'Discord', href: 'https://discord.com/invite/b8JayNQw', icon: IconDiscord },
    { label: 'Twitter', href: 'https://x.com/EnReachAI', icon: IconX },
    { label: 'Telegram', href: 'https://t.me/+bwjcPLf_ZQ00YTBh', icon: IconTelegram },
]

export function SocialButtons() {
    return <div className="flex items-center gap-4">
        {
            socialLinks.map(({ label, href, icon }) => {
                const Icon = icon

                return <a
                    key={label}
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon />
                </a>
            })
        }
    </div>
}