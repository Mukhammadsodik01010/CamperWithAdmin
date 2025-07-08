import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  InputCheckbox,
  SectionLedtINput,
  SectionLeftChildInput,
} from "../Styles/Section";

const AccordionExpandIcon = () => {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <InputCheckbox>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">Aidal</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">Knal</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">escape</label>
              </SectionLedtINput>
            </InputCheckbox>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <InputCheckbox>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">escape</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">Aidal</label>
              </SectionLedtINput>
            </InputCheckbox>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">License type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <InputCheckbox>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">1 year</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">2 year</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">1.5 year</label>
              </SectionLedtINput>
            </InputCheckbox>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Number of travelers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <InputCheckbox>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">2</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">3-4</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">5+</label>
              </SectionLedtINput>
            </InputCheckbox>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <InputCheckbox>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">Seoul</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">Korea</label>
              </SectionLedtINput>
              <SectionLedtINput>
                <SectionLeftChildInput type="checkbox" />
                <label htmlFor="">Pusan</label>
              </SectionLedtINput>
            </InputCheckbox>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordionExpandIcon;
