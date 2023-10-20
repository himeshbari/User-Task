import Location from "../models/locationModel.js";

// Register a new location
export const addLocation = async (req, res) => {
  try {
    const { locationName, locationCode } = req.body;

    // Create a new location document
    const location = new Location({
      locationName,
      locationCode,
    });

    // Save the location to the database
    await location.save();

    res.status(201).json({
      success: true,
      message: "Location registered successfully",
      data: {
        location,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all locations
export const getLocations = async (req, res) => {
  try {
    // Retrieve all locations from the database
    const locations = await Location.find({});

    res.status(200).json({
      success: true,
      message: "Locations retrieved successfully",
      data: locations,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
