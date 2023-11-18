import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="h-[755px] md:px-5 relative w-full">
          <div className="h-[755px] m-auto w-full">
            <Img
              className="h-[755px] m-auto object-cover w-full"
              src="images/img_rectangle.png"
              alt="rectangle"
            />
            <div className="absolute flex flex-col gap-6 justify-start left-[0] top-[0] w-1/2">
              <div className="md:h-80 sm:h-[358px] h-[359px] relative w-[77%] sm:w-full">
                <div className="absolute flex flex-col md:gap-10 gap-[78px] h-full inset-y-[0] items-start justify-end left-[0] my-auto p-0.5">
                  <Text
                    className="ml-28 md:ml-[0] mt-[194px] text-[15px] text-black-900"
                    size="txtRobotoRegular15"
                  >
                    Driving growth with personalization.
                  </Text>
                  <Text
                    className="ml-28 md:ml-[0] sm:text-[40px] md:text-[46px] text-[54px] text-deep_purple-A400"
                    size="txtRobotoBold54"
                  >
                    More personal.
                  </Text>
                </div>
                <Text
                  className="absolute bottom-[18%] right-[0] sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
                  size="txtRobotoBold54Black900"
                >
                  Make ecommerce
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[115px] w-[85%] md:w-full">
                <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
                  <Text
                    className="leading-[30.00px] text-black-900 text-lg w-[88%] sm:w-full"
                    size="txtRobotoRegular18"
                  >
                    <span className="text-black-900 font-roboto text-left font-normal">
                      Hundreds of brands use{" "}
                    </span>
                    <span className="text-black-900 font-roboto text-left font-black">
                      Qubit CommerceAI{" "}
                    </span>
                    <span className="text-black-900 font-roboto text-left font-normal">
                      {" "}
                      to power the next generation of product recommendations,
                      badging and insights to build exceptional customer
                      experiences.
                    </span>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-0.5 pr-1 py-1 w-full">
                  <Input
                    name="groupTwo"
                    placeholder="Enter your email"
                    className="p-0 placeholder:text-black-900_44 text-[15px] text-left w-full"
                    wrapClassName="border border-deep_purple-A400_01 border-solid sm:flex-1 w-[45%] sm:w-full"
                    type="email"
                  ></Input>
                  <Button className="cursor-pointer min-w-[187px] rounded-br-[27px] rounded-tr-[27px] text-[15px] text-center">
                    Book a demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row mt-5 mb-3.5">
                <Img
                  className="h-6 md:h-auto object-cover"
                  src="images/img_rectangle_24x79.png"
                  alt="rectangle_One"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-[42px] sm:hidden items-center justify-start md:ml-[0] ml-[137px] px-5 w-[58%] md:w-full">
                <div className="flex flex-col items-start justify-start pb-2.5 pr-2.5">
                  <Text
                    className="mb-[9px] text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Why Qubit?
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-5 pr-5">
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Products
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-5 pr-5">
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Solutions
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="mb-[15px] text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Customers
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="mb-[15px] text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Case studies
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="mb-[15px] text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Resources
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-5 pr-5">
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtRobotoRegular14"
                  >
                    More
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row gap-[38px] sm:hidden items-end justify-between mb-[18px] md:ml-[0] ml-[106px] pt-2.5 w-[17%] md:w-full">
                <Button
                  className="cursor-pointer min-w-[157px] rounded-[15px] text-center text-sm"
                  size="xs"
                >
                  Book a demo
                </Button>
                <a
                  href="javascript:"
                  className="mb-0.5 mt-2.5 text-gray-900 text-sm"
                >
                  <Text size="txtRobotoRegular14">Log In</Text>
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-center justify-end p-[19px] w-full">
          <Text
            className="mt-[21px] text-center text-gray-900 text-lg"
            size="txtRobotoBold18"
          >
            Trusted by world-class brands.
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1320px] mt-[17px] mx-auto p-3.5 md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[42px] md:h-auto sm:ml-[0] ml-[41px] object-cover w-[8%] sm:w-full"
              src="images/img_rectangle_42x102.png"
              alt="rectangle_Two"
            />
            <Img
              className="sm:flex-1 h-[42px] md:h-auto sm:ml-[0] ml-[59px] object-cover w-[8%] sm:w-full"
              src="images/img_rectangle_42x97.png"
              alt="rectangle_Three"
            />
            <Img
              className="sm:flex-1 h-[42px] md:h-auto sm:ml-[0] ml-[59px] object-cover w-[8%] sm:w-full"
              src="images/img_rectangle_42x95.png"
              alt="rectangle_Four"
            />
            <Img
              className="sm:flex-1 h-[37px] md:h-auto sm:ml-[0] ml-[60px] object-cover w-[9%] sm:w-full"
              src="images/img_rectangle_37x115.png"
              alt="rectangle_Five"
            />
            <Img
              className="sm:flex-1 h-[42px] md:h-auto sm:ml-[0] ml-[59px] object-cover w-[5%] sm:w-full"
              src="images/img_rectangle_42x53.png"
              alt="rectangle_Six"
            />
            <Img
              className="sm:flex-1 h-[37px] md:h-auto sm:ml-[0] ml-[60px] object-cover w-[9%] sm:w-full"
              src="images/img_rectangle_1.png"
              alt="rectangle_Seven"
            />
            <Img
              className="sm:flex-1 h-[42px] md:h-auto sm:ml-[0] ml-[59px] object-cover w-[8%] sm:w-full"
              src="images/img_rectangle_2.png"
              alt="rectangle_Eight"
            />
            <Img
              className="sm:flex-1 h-[37px] md:h-auto sm:ml-[0] ml-[60px] object-cover w-[9%] sm:w-full"
              src="images/img_rectangle_3.png"
              alt="rectangle_Nine"
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-[11px] md:px-5 w-[13%] md:w-full">
            <div className="flex flex-col items-center justify-start pb-0.5 px-0.5 w-full">
              <Text
                className="text-base text-center text-gray-900"
                size="txtRobotoBold16"
              >
                <>Meet our customers &gt;</>
              </Text>
            </div>
            <Line className="bg-deep_purple-A400_01 h-0.5 w-full" />
          </div>
        </div>
        <div className="md:h-[1064px] h-[660px] sm:h-[740px] max-w-[1380px] mt-20 mx-auto md:px-5 relative w-full">
          <div className="h-[259px] ml-[377px] mt-[71px] w-[26%]"></div>
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto md:px-10 sm:px-5 px-[60px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start px-[9px] w-full">
              <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-1/2 md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtRobotoBold40"
                  >
                    Grow 2.5x faster than
                  </Text>
                  <Text
                    className="mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtRobotoBold40"
                  >
                    your competitors.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pr-1.5 py-1.5 w-full">
                  <div className="flex flex-row gap-[22px] items-end justify-start w-[58%] md:w-full">
                    <Button
                      className="cursor-pointer min-w-[187px] text-[15px] text-center"
                      shape="round"
                    >
                      Book a demo
                    </Button>
                    <div className="flex flex-col items-center justify-start mb-[5px] mt-2.5 w-[41%]">
                      <div className="h-[22px] relative w-full">
                        <div className="absolute bg-white-A700 h-[22px] inset-[0] justify-center m-auto w-full"></div>
                        <Text
                          className="absolute inset-x-[0] mx-auto text-black-900 text-sm top-[0] w-max"
                          size="txtRobotoBold14"
                        >
                          <>Meet our customers &gt;</>
                        </Text>
                      </div>
                      <Line className="bg-deep_purple-A400 h-0.5 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pr-1.5 py-1.5 w-full">
                  <Text
                    className="text-[15px] text-black-900"
                    size="txtRobotoRegular15"
                  >
                    *PwC audited methodology.
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[11px]">
                    <Text
                      className="text-[15px] text-black-900"
                      size="txtRobotoRegular15"
                    >
                      Read the report
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px w-[19%]" />
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Line className="bg-gray-300 h-[220px] w-px" />
                      <div className="flex flex-1 flex-col items-end justify-start pl-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-start justify-start mb-[102px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtRobotoBold40Black900"
                          >
                            140%
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            <>Qubit&#39;s top customers</>
                          </Text>
                          <Text
                            className="mt-1 text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            annual growth rate.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Line className="bg-gray-300 h-[220px] w-px" />
                      <div className="flex flex-1 flex-col items-end justify-start pl-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-start justify-start mb-[102px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtRobotoBold40Black900"
                          >
                            $20bn
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            Online sales generated
                          </Text>
                          <Text
                            className="mt-1 text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            by our customers in 2020.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Line className="bg-gray-300 h-[220px] w-px" />
                      <div className="flex flex-1 flex-col items-end justify-start pl-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-start justify-start mb-[102px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtRobotoBold40Black900"
                          >
                            364
                          </Text>
                          <Text
                            className="mt-4 text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            Ecommerce stores are
                          </Text>
                          <Text
                            className="mt-[5px] text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            growing faster with Qubit.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Line className="bg-gray-300 h-[220px] w-px" />
                      <div className="flex flex-1 flex-col items-end justify-start pl-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-start justify-start mb-[102px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtRobotoBold40Black900"
                          >
                            9.5m
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            Personalized experiences
                          </Text>
                          <Text
                            className="mt-1 text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            delivered every hour.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Line className="bg-gray-300 h-[220px] w-px" />
                      <div className="flex flex-1 flex-col items-end justify-start pl-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-start justify-start mb-[102px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtRobotoBold40Black900"
                          >
                            4.4m
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            Shoppers influenced
                          </Text>
                          <Text
                            className="mt-1 text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            by Qubit every day.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Line className="bg-gray-300 h-[220px] w-px" />
                      <div className="flex flex-1 flex-col items-end justify-start pl-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-start justify-start mb-[102px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtRobotoBold40Black900"
                          >
                            $1.6bn
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            Incremental revenue generated
                          </Text>
                          <Text
                            className="mt-1 text-[15px] text-black-900"
                            size="txtRobotoRegular15"
                          >
                            by our customers in 2020.*
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[47px] items-center justify-end py-[15px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-start mt-[79px] md:px-10 sm:px-5 px-[542px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtRobotoBold40Black900"
            >
              Qubit CommerceAI.
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtRobotoRegular18"
            >
              The new way to drive growth.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[72px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1400px] mx-auto p-3 md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start pb-0.5 px-0.5 w-full">
              <Img
                className="h-[50px] w-[50px]"
                src="images/img_frame.svg"
                alt="frame"
              />
              <Text
                className="mt-[43px] text-[19px] text-black-900 text-center"
                size="txtRobotoBold19"
              >
                More insight
              </Text>
              <Text
                className="leading-[15.00px] my-[15px] text-[15px] text-black-900 text-center w-full"
                size="txtRobotoRegular15"
              >
                <>
                  Learn which products drive performance and which don&#39;t,
                  through automated insights you can action.
                </>
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-[3px] w-full">
              <Img
                className="h-[50px] w-[50px]"
                src="images/img_frame_deep_purple_a700_50x50.svg"
                alt="frame"
              />
              <Text
                className="mt-[43px] text-[19px] text-black-900 text-center"
                size="txtRobotoBold19"
              >
                More personal
              </Text>
              <Text
                className="leading-[22.00px] mt-3.5 text-[15px] text-black-900 text-center w-full"
                size="txtRobotoRegular15"
              >
                Qubit CommerceAI generates a model per shopper to make every
                customer interaction more relevant.
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1.5 w-full">
              <Img
                className="h-[50px] w-[50px]"
                src="images/img_frame_1.svg"
                alt="frame"
              />
              <Text
                className="mt-[41px] text-[19px] text-black-900 text-center"
                size="txtRobotoBold19"
              >
                More effective
              </Text>
              <Text
                className="leading-[22.00px] mt-4 text-[15px] text-black-900 text-center w-full"
                size="txtRobotoRegular15"
              >
                Qubit fuses data, intent, and design tools to enable your team
                to create more effective customer experiences.
              </Text>
            </div>
          </List>
        </div>
        <div className="h-[1064px] sm:h-[1122px] md:px-5 relative w-full">
          <div className="bg-gray-100 h-[1064px] m-auto w-full"></div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto py-[95px] w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start pb-7 sm:px-5 px-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoBold40Black900"
              >
                All the power. Easy to use.
              </Text>
              <Text
                className="text-[15px] text-black-900 text-center"
                size="txtRobotoRegular15"
              >
                <>
                  By collaborating with real ecommerce teams we&#39;ve built the
                  next-gen personalization tool. No code. No clunkiness.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[66px] w-[70%] md:w-full">
              <Img
                className="h-[560px] md:h-auto object-cover w-full"
                src="images/img_rectangle_560x996.png"
                alt="rectangle_Fifteen"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-center mt-[70px] p-[5px] w-full">
              <Button
                className="cursor-pointer min-w-[189px] sm:ml-[0] ml-[515px] text-[15px] text-center"
                shape="round"
              >
                See products
              </Button>
              <Button
                className="cursor-pointer min-w-[187px] mr-[515px] text-[15px] text-center"
                shape="round"
                color="white_A700"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start p-[95px] md:px-10 sm:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtRobotoBold40Black900"
          >
            What you can do with Qubit.
          </Text>
          <div className="flex flex-col items-center justify-start max-w-[1020px] mb-[54px] mx-auto w-full">
            <div className="md:gap-5 gap-[95px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mb-[49px] min-h-[auto] mt-7 w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_frame_deep_purple_a700.svg"
                  alt="frame"
                />
                <div className="flex flex-col gap-[22px] items-center justify-end mt-1 pt-[5px] px-[5px] w-full">
                  <Text
                    className="mt-[5px] text-[19px] text-black-900 text-center"
                    size="txtRobotoBold19"
                  >
                    1:1 Product recommendations
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-center text-gray-900 w-full"
                    size="txtRobotoRegular15Gray900"
                  >
                    Use deep learning recommendations to engage customers in
                    seconds.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_frame_2.svg"
                  alt="frame"
                />
                <div className="flex flex-col gap-5 items-center justify-end mt-1 pt-3 px-3 w-full">
                  <Text
                    className="text-[19px] text-black-900 text-center"
                    size="txtRobotoBold19"
                  >
                    1:1 Product badging
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-center text-gray-900 w-[98%] sm:w-full"
                    size="txtRobotoRegular15Gray900"
                  >
                    Guide discovery with personalized product badging. Push
                    sales with social proofing.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_frame_deep_purple_a400_01.svg"
                  alt="frame"
                />
                <div className="flex flex-col gap-[22px] items-center justify-end mt-1 pt-2.5 px-2.5 w-full">
                  <Text
                    className="text-[19px] text-black-900 text-center"
                    size="txtRobotoBold19"
                  >
                    Personalized content
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-center text-gray-900 w-[98%] sm:w-full"
                    size="txtRobotoRegular15Gray900"
                  >
                    Your customers are unique. Present them with content that
                    shows you know them.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_frame.svg"
                  alt="frame"
                />
                <div className="flex flex-col gap-5 items-center justify-end mt-1 pt-1.5 px-1.5 w-full">
                  <Text
                    className="mt-1.5 text-[19px] text-black-900 text-center"
                    size="txtRobotoBold19"
                  >
                    Product insights
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-center text-gray-900 w-full"
                    size="txtRobotoRegular15Gray900"
                  >
                    A platform packed with insights helping you discover the
                    hard hitting things you can do next.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_frame_deep_purple_a400_01_50x50.svg"
                  alt="frame"
                />
                <div className="flex flex-col gap-[22px] items-center justify-start mt-1 py-2.5 w-full">
                  <Text
                    className="text-[19px] text-black-900 text-center"
                    size="txtRobotoBold19"
                  >
                    CommerceAI
                  </Text>
                  <Text
                    className="leading-[22.00px] mb-2 text-[15px] text-center text-gray-900 w-full"
                    size="txtRobotoRegular15Gray900"
                  >
                    <>
                      Your customer&#39;s behavioral data is telling you a
                      story. Use predictive and affinity based algorithms to
                      serve them better.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_frame_3.svg"
                  alt="frame"
                />
                <div className="flex flex-col gap-5 items-center justify-end mt-1 pt-[9px] px-[9px] w-full">
                  <Text
                    className="mt-[3px] text-[19px] text-black-900 text-center"
                    size="txtRobotoBold19"
                  >
                    Platform integrations
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-center text-gray-900 w-full"
                    size="txtRobotoRegular15Gray900"
                  >
                    Connect Qubit to any tool via API. Import data or trigger an
                    experience on any platform.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2381px] md:px-5 relative w-full">
          <div className="md:h-[1615px] sm:h-[707px] h-[751px] mb-[-44px] mx-auto w-full z-[1]">
            <div className="absolute bg-gray-100 h-[751px] inset-[0] justify-center m-auto w-full"></div>
            <div className="absolute flex flex-col md:gap-10 gap-[66px] h-max inset-[0] items-center justify-center m-auto py-[79px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoBold40Black900"
              >
                Trusted by leading brands.
              </Text>
              <div className="flex flex-col items-center justify-start mb-5 w-full">
                <div className="md:h-[1394px] sm:h-[438px] h-[448px] p-1 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[73%]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[205px] md:h-auto object-cover w-full"
                            src="images/img_rectangle_205x320.png"
                            alt="rectangle"
                          />
                          <div className="bg-white-A700 flex flex-col gap-[25px] items-center justify-start p-[25px] sm:px-5 rounded-bl-[7px] rounded-br-[7px] shadow-bs1 w-full">
                            <Img
                              className="h-[35px] md:h-auto object-cover w-[56%]"
                              src="images/img_rectangle_35x150.png"
                              alt="rectangle_One"
                            />
                            <Text
                              className="leading-[22.00px] mb-[35px] text-center text-deep_purple-A400_01 text-lg w-[69%] sm:w-full"
                              size="txtRobotoBold18DeeppurpleA40001"
                            >
                              Clinique builds relationships with millions of
                              customers each year.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <Img
                            className="h-[205px] md:h-auto object-cover w-full"
                            src="images/img_rectangle_4.png"
                            alt="rectangle"
                          />
                          <div className="bg-white-A700 flex flex-col gap-[25px] items-center justify-start p-[25px] sm:px-5 rounded-bl-[7px] rounded-br-[7px] shadow-bs1 w-full">
                            <Img
                              className="h-[35px] md:h-auto object-cover w-[56%]"
                              src="images/img_rectangle_35x151.png"
                              alt="rectangle_One"
                            />
                            <Text
                              className="leading-[22.00px] mb-[57px] text-center text-deep_purple-A400_01 text-lg w-[82%] sm:w-full"
                              size="txtRobotoBold18DeeppurpleA40001"
                            >
                              River Island transforms the customer experience
                              with personalization.
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[31%] md:w-full">
                        <div className="bg-gray-900_02 flex flex-col items-center justify-start rounded-[7px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[205px] md:h-auto object-cover w-full"
                              src="images/img_rectangle_5.png"
                              alt="rectangle_Eighteen"
                            />
                            <div className="bg-white-A700 flex flex-col gap-[25px] items-center justify-start p-[25px] sm:px-5 rounded-bl-[7px] rounded-br-[7px] shadow-bs1 w-full">
                              <Img
                                className="h-[35px] md:h-auto object-cover w-[24%]"
                                src="images/img_rectangle_35x64.png"
                                alt="rectangle_Nineteen"
                              />
                              <Text
                                className="leading-[22.00px] mb-[57px] text-center text-deep_purple-A400_01 text-lg w-[79%] sm:w-full"
                                size="txtRobotoBold18DeeppurpleA40001"
                              >
                                MandM Direct drives increase in revenue with
                                deep learning recs
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[60px] inset-[0] justify-center m-auto"
                    src="images/img_frame_deep_purple_a400_01_60x1050.svg"
                    alt="frame"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1673px] mt-auto mx-auto w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start mb-[-55.25px] mx-auto py-[139px] w-full z-[1]">
              <div className="flex flex-col gap-[13px] items-center justify-start pb-0.5 px-0.5 w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtRobotoBold40Black900"
                >
                  We specialize in your industry.
                </Text>
                <Text
                  className="text-black-900 text-center text-lg"
                  size="txtRobotoRegular18"
                >
                  Learn how we are delivering personalization at scale across
                  sectors.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-3.5 w-[69%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-bl-lg rounded-br-[10px] rounded-tl-lg rounded-tr-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[150px] w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_frame_pink_400.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtRobotoBold18WhiteA700"
                          >
                            Beauty and cosmetics
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-[18px] text-[15px] text-white-A700 w-[95%] sm:w-full"
                          size="txtRobotoRegular15WhiteA700"
                        >
                          Discover relevant products. Push samples. Upsell and
                          replenish.
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[7px] pb-1 pr-1">
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtRobotoRegular15WhiteA700"
                          >
                            Explore our solutions for beauty and cosmetics.
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-0.5 mt-0.5 w-[90%]" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-bl-lg rounded-br-[10px] rounded-tl-lg rounded-tr-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[266px] w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_frame_50x50.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtRobotoBold18WhiteA700"
                          >
                            Fashion
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-[18px] text-[15px] text-white-A700 w-[82%] sm:w-full"
                          size="txtRobotoRegular15WhiteA700"
                        >
                          Supercharge merchandising. Reach your best customers.
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[7px] pb-1 pr-1">
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtRobotoRegular15WhiteA700"
                          >
                            Explore our solutions for fashion.
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-0.5 mt-0.5 w-[63%]" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-bl-lg rounded-br-[10px] rounded-tl-lg rounded-tr-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[274px] w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_frame_4.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtRobotoBold18WhiteA700"
                          >
                            Luxury
                          </Text>
                        </div>
                        <Text
                          className="mt-[17px] text-[15px] text-white-A700"
                          size="txtRobotoRegular15WhiteA700"
                        >
                          Drive brand experience online. Look after your VIPs.
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[34px] pb-1 pr-1">
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtRobotoRegular15WhiteA700"
                          >
                            Explore our solutions for luxury.
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-0.5 mt-0.5 w-3/5" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-bl-lg rounded-br-[10px] rounded-tl-lg rounded-tr-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[267px] w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_frame_5.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtRobotoBold18WhiteA700"
                          >
                            Airlines
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-[18px] text-[15px] text-white-A700 w-[92%] sm:w-full"
                          size="txtRobotoRegular15WhiteA700"
                        >
                          Increase loyalty. Boost ancillary sales. Capture every
                          opportunity.
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[7px] pb-1 pr-1">
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtRobotoRegular15WhiteA700"
                          >
                            Explore our solutions for airlines.
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-0.5 mt-0.5 w-[62%]" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-bl-lg rounded-br-[10px] rounded-tl-lg rounded-tr-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[196px] w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_frame_6.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtRobotoBold18WhiteA700"
                          >
                            Travel & tourism
                          </Text>
                        </div>
                        <Text
                          className="mt-[17px] text-[15px] text-white-A700"
                          size="txtRobotoRegular15WhiteA700"
                        >
                          Be persuasive. Inspire travellers. Drive revenue.
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[33px] pb-1 pr-1">
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtRobotoRegular15WhiteA700"
                          >
                            Explore our solutions for travel and tourism.
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-0.5 mt-0.5 w-[82%]" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-bl-lg rounded-br-[10px] rounded-tl-lg rounded-tr-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[216px] w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_frame_deep_purple_a400_01_50x50.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtRobotoBold18WhiteA700"
                          >
                            Online betting
                          </Text>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-[18px] text-[15px] text-white-A700 w-[83%] sm:w-full"
                          size="txtRobotoRegular15WhiteA700"
                        >
                          Bring events to life. Personalize in real time. Be
                          responsible.
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[7px] pb-1 pr-1">
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtRobotoRegular15WhiteA700"
                          >
                            Explore our solutions for online betting.
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-0.5 mt-0.5 w-3/4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-col items-center justify-end mt-auto mx-auto p-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[83px] items-center justify-start mt-5 w-[90%] md:w-full">
                <div className="flex flex-col gap-[50px] items-start justify-start pl-5 w-[49%] md:w-full">
                  <div className="flex flex-col items-start justify-start pb-[17px] pr-[17px]">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                      size="txtRobotoBold40Gray90001"
                    >
                      A connected ecosystem.
                    </Text>
                    <Text
                      className="mt-[50px] text-[13px] text-black-900"
                      size="txtRobotoRegular13"
                    >
                      The Qubit personalization platform is designed with
                      enterprise and high-growth businesses in mind.
                    </Text>
                    <Text
                      className="leading-[30.00px] mb-1.5 mt-[17px] text-[13px] text-black-900 w-full"
                      size="txtRobotoRegular13"
                    >
                      Our open ecosystem approach means you can connect any data
                      source and deliver personalization across any channel.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[203px] text-center text-sm"
                    shape="round"
                  >
                    See our integrations
                  </Button>
                </div>
                <Img
                  className="h-[567px] md:h-auto object-cover w-[567px] sm:w-full"
                  src="images/img_rectangle_567x567.png"
                  alt="rectangle_Sixteen"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[329px] md:px-5 relative w-full">
          <Img
            className="h-[329px] m-auto object-cover w-full"
            src="images/img_rectangle_329x1440.png"
            alt="rectangle_Twenty"
          />
          <div className="absolute flex flex-col gap-[30px] h-max inset-[0] items-center justify-center m-auto px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
              size="txtRobotoBold40WhiteA700"
            >
              Book a demo today.
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center p-1 w-full">
              <Input
                name="groupOne"
                placeholder="Enter your email"
                className="!placeholder:text-black-900_82 !text-black-900_82 p-0 text-[15px] text-center w-full"
                wrapClassName="sm:flex-1 sm:ml-[0] ml-[468px] w-1/5 sm:w-full"
                type="email"
              ></Input>
              <Button className="cursor-pointer min-w-[187px] mr-[468px] rounded-br-[27px] rounded-tr-[27px] text-[15px] text-center">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
        <Img
          className="h-[182px] md:h-auto object-cover w-[10%]"
          src="images/img_rectangle_182x140.png"
          alt="rectangle_TwentyOne"
        />
        <footer className="bg-gray-900_03 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-[82px] w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start py-[29px] w-full">
              <div className="flex flex-col gap-7 items-center justify-start mb-2.5 pt-3 w-full">
                <Text
                  className="text-base text-center text-gray-900"
                  size="txtRobotoRegular16"
                >
                  Connect with us
                </Text>
                <Img
                  className="h-[33px]"
                  src="images/img_frame_gray_900.svg"
                  alt="frame_One"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[50px] w-[81%] md:w-full">
              <div className="flex flex-col gap-[22px] items-start justify-end pr-1 py-1 w-[17%] md:w-full">
                <Text
                  className="mt-1 text-base text-white-A700"
                  size="txtRobotoBold16WhiteA700"
                >
                  Featured Capabilities
                </Text>
                <div className="flex flex-col items-start justify-end">
                  <Text
                    className="mt-2 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    A/B testing
                  </Text>
                  <Text
                    className="mt-3 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Abandonment recovery
                  </Text>
                  <Text
                    className="mt-3 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Customer insights
                  </Text>
                  <Text
                    className="leading-[18.00px] mt-[13px] text-sm text-white-A700 w-[77%] sm:w-full"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Customer polling and feedback
                  </Text>
                  <Text
                    className="mt-2.5 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Customer segmentation
                  </Text>
                  <Text
                    className="mt-[11px] text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Data collection
                  </Text>
                  <Text
                    className="leading-[18.00px] mt-3.5 text-sm text-white-A700 w-[53%] sm:w-full"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Ecommerce merchandising
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pr-2.5 py-2.5 w-[17%] md:w-full">
                <div className="flex flex-col items-start justify-end mb-6 mt-10 pr-[3px] py-[3px]">
                  <Text
                    className="mt-[5px] text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Custom machine learning
                  </Text>
                  <Text
                    className="mt-[13px] text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Journey Personalization
                  </Text>
                  <Text
                    className="leading-[18.00px] mt-[13px] text-sm text-white-A700 w-[55%] sm:w-full"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Mobile app personalization
                  </Text>
                  <Text
                    className="leading-[18.00px] mt-[11px] text-sm text-white-A700 w-[55%] sm:w-full"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Cross-channel personalization
                  </Text>
                  <Text
                    className="mt-2.5 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Social proofing
                  </Text>
                  <Text
                    className="mt-[13px] text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Website personalization
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-end pr-1 py-1 w-[17%] md:w-full">
                <Text
                  className="mt-[3px] text-base text-white-A700"
                  size="txtRobotoBold16WhiteA700"
                >
                  Products
                </Text>
                <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                  <Text
                    className="leading-[18.00px] mt-1.5 text-sm text-white-A700 w-[68%] sm:w-full"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    1:1 Product recommendations
                  </Text>
                  <Text
                    className="mt-2.5 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    1:1 Product badging
                  </Text>
                  <Text
                    className="mt-[13px] text-[13px] text-white-A700"
                    size="txtRobotoRegular13WhiteA700"
                  >
                    1:1 Journey personalization
                  </Text>
                  <Text
                    className="mt-[11px] text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Personalized content
                  </Text>
                  <Text
                    className="mt-3.5 text-sm text-white-A700"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Product insights
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start pr-[7px] py-[7px] w-[17%] md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoBold16WhiteA700"
                >
                  Resources
                </Text>
                <ul className="flex flex-col gap-3 items-start justify-end mb-11 pr-[3px] py-[3px] md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1 text-sm text-white-A700"
                    >
                      <Text size="txtRobotoRegular14WhiteA700">Resources</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">Customers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">
                        Qubit Blog.
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">Glossary</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[21px] items-start justify-end pr-1 py-1 w-[17%] md:w-full">
                <Text
                  className="mt-[5px] text-base text-white-A700"
                  size="txtRobotoBold16WhiteA700"
                >
                  Company
                </Text>
                <ul className="flex flex-col gap-[11px] items-start justify-end pr-1 py-1 md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1 text-sm text-white-A700"
                    >
                      <Text size="txtRobotoRegular14WhiteA700">Why Qubit?</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">About us</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">Careers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">Press</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">Contact</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start pr-2 py-2">
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Working with us
                </Text>
                <Text
                  className="mb-[118px] text-sm text-white-A700"
                  size="txtRobotoRegular14WhiteA700"
                >
                  Legal
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[39px] md:px-10 sm:px-5 px-[110px] w-full">
              <div className="flex flex-col gap-[13px] justify-start w-[58%] md:w-full">
                <Img
                  className="h-[21px] md:h-auto md:ml-[0] ml-[574px] object-cover w-[11%]"
                  src="images/img_rectangle_21x73.png"
                  alt="rectangle_TwentyTwo"
                />
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[41px]"
                    src="images/img_frame_white_a700.svg"
                    alt="frame_Two"
                  />
                  <Text
                    className="mt-[18px] text-[13px] text-center text-white-A700"
                    size="txtRobotoRegular13WhiteA700"
                  >
                    © 2021 Qubit. All rights reserved.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopPage;
