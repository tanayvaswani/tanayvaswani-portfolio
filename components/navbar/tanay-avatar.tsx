import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TanayAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/114291962?v=4"
        alt="tanay"
      />
      <AvatarFallback>TV</AvatarFallback>
    </Avatar>
  );
}
