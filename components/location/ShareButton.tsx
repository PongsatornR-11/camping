"use client";
import React from "react";

import { Share2 } from "lucide-react";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  EmailShareButton,
  EmailIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const socialMediaButtons = [
  { Button: EmailShareButton, Icon: EmailIcon },
  { Button: LineShareButton, Icon: LineIcon },
  { Button: LinkedinShareButton, Icon: LinkedinIcon },
  { Button: TwitterShareButton, Icon: TwitterIcon },
  { Button: FacebookShareButton, Icon: FacebookIcon },
];

const ShareButton = ({
  locationId,
  name,
}: {
  locationId: string;
  name: string;
}) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/location/${locationId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Share2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="flex gap-2 w-full justify-between items-center"
      >
        {socialMediaButtons.map(({ Button, Icon }, index) => (
          <Button key={index} url={shareLink} name={name}>
            <Icon className="rounded-md" size="36px" />
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
