Create Database BuilderDB    
    
Create table dbo.Builder(    
   BuilderID int identity(1,1),    
   AccountName varchar(500),    
   ContactName varchar(500),    
   BuilderAddress varchar(500),    
   ABN int   
)  

Create table dbo.Project(    
   ProjectID int identity(1,1),    
   ProjectName varchar(500),    
   ProjectAddress varchar(500),    
   ProjectTown varchar(500), 
   Council varchar(500), 
   ProjectState varchar(500), 
   ApproxValue int, 
   StartDate varchar(500), 
   ExpectEnd varchar(500), 
   Builder varchar(500)
)  

INSERT INTO dbo.Builder 
    ( AccountName, ContactName, BuilderAddress, ABN) 
VALUES 
    ('Lukes Builder Company', 'Luke Parsons', '42 Wallaby Way, Sydney', 10101010);

INSERT INTO dbo.Project
    ( ProjectName, ProjectAddress, ProjectTown, Council, ProjectState, ApproxValue, StartDate, ExpectEnd, Builder) 
VALUES 
    ('A Big Project', '32 Marsh Street', 'Sydney CBD', 'Sydney CBD', 'New South Wales', 1000000, '01/01/2020', '23/07/2022', 'Lukes Builder Company');