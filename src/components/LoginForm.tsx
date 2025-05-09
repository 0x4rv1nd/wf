import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import db from "@/db";

const LoginForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // Get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });

    await new Promise((resolve) => setTimeout(resolve, 5000));
    alert('Simulated sign-in delay');
  };

  return (
    <Card className="w-full max-w-sm shadow-lg border-t-4 border-t-wells-red">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Sign On</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input
                id="username"
                name="username"
                placeholder="Enter username"
                type="text"
                className="focus-visible:ring-wells-red"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                className="focus-visible:ring-wells-red"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save username
              </label>
            </div>
            
            <Button type="submit" className="w-full bg-wells-red text-white hover:bg-red-700">
              Sign On
            </Button>
            
            <div className="space-y-2 text-sm text-center">
              <a href="#" className="block text-wells-navy hover:underline">
                Forgot username or password?
              </a>
              <a href="#" className="block text-wells-navy hover:underline">
                Not enrolled? Sign up now
              </a>
            </div>
          </div>
        </form>
        <p>Note: Database operations are simulated in this environment.</p>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
