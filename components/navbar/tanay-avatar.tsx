import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TanayAvatar() {
  return (
    <div>
      <div className="hidden sm:block">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/114291962?v=4"
            alt="tanay"
          />
          <AvatarFallback>TV</AvatarFallback>
        </Avatar>
      </div>

      <p className="block sm:hidden">Home</p>
    </div>
  );
}
