
/**
 * API client for contact lookup
 * This file contains functions for interacting with the backend API
 */
import { toast } from "sonner";

export interface ContactLookupResponse {
  id: string;
  phone?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  success: boolean;
  message?: string;
}

/**
 * Fetch contact by phone number using external API endpoint
 */
export const fetchContactByPhoneSecure = async (phone: string): Promise<ContactLookupResponse | null> => {
  try {
    console.log("🔍 Looking up contact with phone via API:", phone);
    
    // Provide user feedback
    toast.info(`Looking up account for ${phone}...`);
    
    // Normalize phone number to remove non-digit characters
    const normalizedPhone = phone.replace(/\D/g, '');
    
    // Construct the API URL with the phone number
    const apiUrl = `https://api.internal.boardy.ai/contact?phone=${encodeURIComponent(phone)}`;
    console.log("🔗 Making API request to:", apiUrl);
    
    // Make the API request
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`);
      toast.error('API error. Please try again.');
      return null;
    }
    
    // Parse the response
    const contactData = await response.json();
    console.log("API returned data:", contactData);
    
    if (contactData && contactData.id) {
      console.log("Found contact with ID:", contactData.id);
      toast.success(`Found your account! ${contactData.firstName ? `Hello, ${contactData.firstName}!` : ''}`);
      return {
        success: true,
        id: contactData.id,
        firstName: contactData.firstName,
      };
    } else {
      console.log("No contact found for phone number:", phone);
      toast.error("No account found with this phone number");
      return null;
    }
  } catch (error) {
    console.error('Error fetching contact:', error);
    toast.error('Failed to find your contact information');
    return null;
  }
};
