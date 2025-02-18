import { useNavigate } from "@remix-run/react";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

type BackButtonProps = {
  to?: string;
  label?: string;
};

export function BackButton({ to, label = "戻る" }: BackButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="gap-1 text-gray-600 hover:text-gray-900 text-md"
    >
      <ChevronLeft />
      {label}
    </Button>
  );
}
