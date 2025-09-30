import { google } from 'googleapis';

export interface UserData {
  name: string;
  email: string;
  source?: string;
  description?: string;
}

class GoogleSheetsService {
  private sheets: any;
  private spreadsheetId: string;

  constructor() {
    this.spreadsheetId = '1bQs9CuaAvTaK07tXhWr0tzc18Y-nsB7jKS4DhOy7voY';
    this.initializeSheets();
  }

  private initializeSheets() {
    try {
      const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
      if (!credentials) {
        throw new Error('GOOGLE_SHEETS_CREDENTIALS environment variable not found');
      }

      const credentialsParsed = JSON.parse(credentials);
      const auth = new google.auth.GoogleAuth({
        credentials: credentialsParsed,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.sheets = google.sheets({ version: 'v4', auth });
    } catch (error) {
      console.error('Failed to initialize Google Sheets service:', error);
      throw error;
    }
  }

  async appendUserData(userData: UserData): Promise<void> {
    try {
      const timestamp = new Date().toISOString();
      const values = [[
        userData.name,
        userData.email,
        timestamp,
        userData.source || 'Unknown',
        userData.description || ''
      ]];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A:E',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values,
        },
      });

      console.log('User data successfully added to Google Sheet:', userData);
    } catch (error) {
      console.error('Failed to append data to Google Sheet:', error);
      throw error;
    }
  }

  async initializeSheetHeaders(): Promise<void> {
    try {
      // Check if headers already exist
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A1:E1',
      });

      if (!response.data.values || response.data.values.length === 0) {
        // Add headers if they don't exist
        await this.sheets.spreadsheets.values.update({
          spreadsheetId: this.spreadsheetId,
          range: 'Sheet1!A1:E1',
          valueInputOption: 'USER_ENTERED',
          resource: {
            values: [['Name', 'Email', 'Timestamp', 'Source', 'Description']],
          },
        });
        console.log('Headers added to Google Sheet');
      } else if (response.data.values[0].length < 5) {
        // If existing headers don't include Description, add it
        await this.sheets.spreadsheets.values.update({
          spreadsheetId: this.spreadsheetId,
          range: 'Sheet1!A1:E1',
          valueInputOption: 'USER_ENTERED',
          resource: {
            values: [['Name', 'Email', 'Timestamp', 'Source', 'Description']],
          },
        });
        console.log('Updated headers to include Description column');
      }
    } catch (error) {
      console.error('Failed to initialize sheet headers:', error);
      throw error;
    }
  }
}

export const sheetsService = new GoogleSheetsService();