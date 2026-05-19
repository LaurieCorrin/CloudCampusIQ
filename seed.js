import courses from './seedData.js';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const baseClient = new DynamoDBClient({ 
  region: "us-west-2" 
});

// Wrap it in the DocumentClient to handle native JS types automatically
const docClient = DynamoDBDocumentClient.from(baseClient);

async function createCourse() {
  const command = new PutCommand({
    TableName: "courses", 
    Item: {
      id: 101, 
      course_name: "Introduction to Computer Science",
      instructor_name: "Dr. Alan Turing",
      department_name: "Computer Science"
    }
  });

  try {
    const response = await docClient.send(command);
    console.log("Success! Item inserted:", response);
  } catch (error) {
    console.error("Error writing to DynamoDB:", error);
  }
}

function seed() {
    for (const course of courses) { 
        createCourse(course);
    }

}