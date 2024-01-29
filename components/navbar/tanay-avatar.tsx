import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TanayAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="tanay" />
      <AvatarFallback>TV</AvatarFallback>
    </Avatar>
  );
}
