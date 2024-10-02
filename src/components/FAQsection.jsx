import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function FaqSection() {
  return (
    <div className="flex justify-center items-center">
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="20px"
        bg="gray.100"
        p={4}
        width={1000}
      >
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box as="span" flex="1" textAlign="left">
                  How do I place an order for an illustration?
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Fill out the Order Form: Go to the ‘Order’ page on our website and
              complete the form with the required details: Upload your photo.
              Specify whether you want a plain background or the background to
              match the photo. Choose between Type A (sizes: A3, A4, A5) or Type
              B (Notebook/Passport Cover). Receive Quotation: After submitting
              the form, you will receive a quotation based on your choices.
              Confirm Your Order: Once you agree to the quotation, confirm your
              order through the website. Payment: Follow the instructions to
              make payment. Wait for Completion: We will notify you once your
              illustration is ready!
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box as="span" flex="1" textAlign="left">
                  How long will it take to receive my illustration?
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The time required depends on the complexity of the illustration
              and our current workload. Generally, it takes [insert estimated
              time, e.g., 1-2 weeks]. You will receive an estimated completion
              date when you confirm your order.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box as="span" flex="1" textAlign="left">
                  Can I choose the background for my illustration?
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you can choose between a plain background or having the
              background match your photo. Simply indicate your preference in
              the order form.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>
  );
}

export default FaqSection;
