import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function ServiceCard() {
  return (
    <div className="flex justify-center items-center">
      <SimpleGrid
        spacing={7}
        templateColumns="repeat(3, minmax(200px, 1fr))"
        className="w-full max-w-5xl"
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Illustrations</Heading>
          </CardHeader>
          <CardBody>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={CheckIcon} />
                projects
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Analytics
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Insights Panel
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Share Features
              </ListItem>
            </List>
          </CardBody>
          <CardFooter>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Logos </Heading>
          </CardHeader>
          <CardBody>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={CheckIcon} />
                projects
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Analytics
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Insights Panel
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Share Features
              </ListItem>
            </List>
          </CardBody>
          <CardFooter>
            <Button colorScheme="pink">Get Started</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Products </Heading>
          </CardHeader>
          <CardBody>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={CheckIcon} />
                projects
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Analytics
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Insights Panel
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Share Features
              </ListItem>
            </List>
          </CardBody>
          <CardFooter>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default ServiceCard;
