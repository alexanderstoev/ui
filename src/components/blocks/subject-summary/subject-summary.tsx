import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card/card";

export const SubjectSummary = () => {
  return (
    <Card className="max-w-xl min-w-80">
      <CardHeader>
        <CardTitle className="text-xl">Zen KB</CardTitle>
        <CardDescription>
          Tool for distilling messy pieces of information into structured knowledge base
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <h2>Pending</h2>
          </li>
          <li>Define a task or two</li>
          <li>Who is the best?</li>
          <li>Another taks goes here</li>
        </ul>
        <ul>
          <li>
            <h2>Completed</h2>
          </li>
          <li>Latest answerd question</li>
          <li>A completed task</li>
          <li>Decision was made here</li>
        </ul>
      </CardContent>
      <CardFooter>Last updat: Yesterday | Status</CardFooter>
    </Card>
  );
};
