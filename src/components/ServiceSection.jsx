import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
function ServiceCard() {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
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
      ;
    </>
  );
}

export default ServiceCard;
