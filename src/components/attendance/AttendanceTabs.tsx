
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StaffAttendanceTab from './StaffAttendanceTab';
import StaffAttendanceHistory from './StaffAttendanceHistory';
import StudentAttendanceTab from './StudentAttendanceTab';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AttendanceTabs: React.FC = () => {
  const [staffTab, setStaffTab] = useState<"attendance" | "history">("attendance");

  return (
    <Tabs defaultValue="students" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="students">Student Attendance</TabsTrigger>
        <TabsTrigger value="staff">Staff Attendance</TabsTrigger>
      </TabsList>
      
      <TabsContent value="students">
        <Card>
          <CardHeader>
            <CardTitle>Student Attendance</CardTitle>
            <CardDescription>
              Manage daily attendance for all students
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-6">
              <StudentAttendanceTab />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="staff">
        <Card>
          <CardHeader>
            <CardTitle>Staff Attendance</CardTitle>
            <CardDescription>
              Manage daily attendance for all staff members
            </CardDescription>
            <Tabs value={staffTab} onValueChange={(v) => setStaffTab(v as "attendance" | "history")} className="w-full mt-2">
              <TabsList>
                <TabsTrigger value="attendance">Mark Attendance</TabsTrigger>
                <TabsTrigger value="history">Attendance History</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="p-0">
            {staffTab === "attendance" ? (
              <div className="p-6">
                <StaffAttendanceTab />
              </div>
            ) : (
              <div className="p-6">
                <StaffAttendanceHistory />
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AttendanceTabs;
