import asyncHandler from "../utils/asyncHandler.js";
import { EnquiryModel } from "../models/enquiry.model.js";


const createEnquiry = asyncHandler(async (req, res) => {
  //get data from req.body
  //validate data
  //save to database
  //send response
  const {name, email, enquireAbout, enquiryDescription} = req.body;
  console.log(name, email, enquireAbout, enquiryDescription);
  const enquiry = await EnquiryModel.create({
  name,
  email,
  enquireAbout,
  enquiryDescription,
});
  res.status(201).json({ message: "Enquiry created successfully" });
});

const getAllEnquiries = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "List of all enquiries" });
});

const getEnquiryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ enquiry: { id } });
});

const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Enquiry ${id} updated successfully` });
});

const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Enquiry ${id} deleted successfully` });
});

export {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
};