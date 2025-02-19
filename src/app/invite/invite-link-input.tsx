import { IconButton } from "@/components/IconButton";
import { InputRoot, InputIcon, InputField } from "@/components/Input";
import { Link, Copy } from "lucide-react";

export function InviteLinkInput() {
    return (
        <InputRoot>
            <InputIcon>
                <Link className='size-5' />
            </InputIcon>

            <InputField
                readOnly
                defaultValue='htp://localhost:3000/invite/541sd51sd5sd1'
            />

            <IconButton className='-mr-2'>
                <Copy className='size-5' />
            </IconButton>
        </InputRoot>
    )
}