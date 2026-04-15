import { Button } from "@/components/primitives/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card/card";

export const HomePage = () => {
  return (
    <Card className="mx-auto max-w-md text-center">
      <CardHeader>
        <CardTitle className="text-xl">Welcome to Zen</CardTitle>
        <CardDescription>
          In order to use Zen you need to create an account and login
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="my-9 flex flex-col">
          <Button variant="default" type="button">
            Login with Discord
          </Button>
        </div>
        <p className="text-muted-foreground text-center text-xs">
          If you don't have an accout it'll be automatically created when you click a provider
        </p>
      </CardContent>
    </Card>
  );
};
