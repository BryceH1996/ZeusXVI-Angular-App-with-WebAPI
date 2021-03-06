USE [Starlabs_Bryce]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 2018/11/19 09:32:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bets]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bets](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[UserID] [int] NOT NULL,
	[EventID] [int] NOT NULL,
	[MarketID] [int] NOT NULL,
 CONSTRAINT [PK_Bets] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BetTypes]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BetTypes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[BetName] [nvarchar](max) NOT NULL,
	[EventID] [int] NOT NULL,
 CONSTRAINT [PK_BetTypes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Countries]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Countries](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [nvarchar](max) NOT NULL,
	[SportID] [int] NOT NULL,
	[isHidden] [bit] NOT NULL,
 CONSTRAINT [PK_Countries] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Events]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Events](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[EventName] [nvarchar](max) NOT NULL,
	[TournamentID] [int] NOT NULL,
	[isHidden] [bit] NOT NULL,
	[CountryID] [int] NOT NULL,
	[SportID] [int] NOT NULL,
 CONSTRAINT [PK_Events] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Markets]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Markets](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[BetID] [int] NOT NULL,
	[OddOne] [decimal](18, 2) NOT NULL,
	[OddTwo] [decimal](18, 2) NOT NULL,
	[Draw] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Markets] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sports]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sports](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[SportName] [nvarchar](max) NOT NULL,
	[isHidden] [bit] NOT NULL,
 CONSTRAINT [PK_Sports] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tournaments]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tournaments](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CountryID] [int] NOT NULL,
	[TournamentName] [nvarchar](max) NOT NULL,
	[isHidden] [bit] NOT NULL,
	[SportID] [int] NOT NULL,
 CONSTRAINT [PK_Tournaments] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](30) NOT NULL,
	[Balance] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Countries] ADD  DEFAULT ((0)) FOR [isHidden]
GO
ALTER TABLE [dbo].[Events] ADD  CONSTRAINT [DF__Events__isHidden__01D345B0]  DEFAULT ((0)) FOR [isHidden]
GO
ALTER TABLE [dbo].[Sports] ADD  DEFAULT ((0)) FOR [isHidden]
GO
ALTER TABLE [dbo].[Tournaments] ADD  CONSTRAINT [DF__Tournamen__isHid__00DF2177]  DEFAULT ((0)) FOR [isHidden]
GO
/****** Object:  StoredProcedure [dbo].[DeleteBetType]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteBetType] @ID int
AS
Begin Transaction
DELETE FROM Markets WHERE BetID = @ID
DELETE FROM BetTypes WHERE ID = @ID


SELECT B.ID, B.BetName, B.EventID, E.EventName FROM BetTypes B
left join Events E on E.ID = B.EventID
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[DeleteCountry]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteCountry] @ID int
AS
Begin Transaction
DELETE FROM Tournaments WHERE CountryID = @ID
DELETE FROM Countries WHERE ID = @ID

SELECT C.ID, C.CountryName, C.SportID, S.SportName, C.isHidden FROM Countries C
left join Sports S on S.ID = C.SportID
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[DeleteEvent]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteEvent] @ID int
AS
Begin Transaction
DELETE FROM Events WHERE ID = @ID

SELECT E.ID, E.EventName, S.SportName, E.SportID, C.CountryName, E.CountryID, T.TournamentName, E.TournamentID, E.Date, E.isHidden FROM Events E
left join Tournaments T on T.ID = E.TournamentID 
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID

COMMIT
GO
/****** Object:  StoredProcedure [dbo].[DeleteMarket]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteMarket] @ID int
AS
Begin Transaction
DELETE FROM Markets WHERE ID = @ID

exec SelectMarkets
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[DeleteSport]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteSport] @ID int
AS
Begin Transaction
DELETE FROM Countries WHERE SportID = @ID
DELETE FROM Sports WHERE ID = @ID

select * from Sports
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[DeleteTournament]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteTournament] @ID int
AS
Begin Transaction
DELETE FROM Events WHERE TournamentID = @ID
DELETE FROM Tournaments WHERE ID = @ID

SELECT T.ID, TournamentName, S.SportName, T.SportID, C.CountryName, T.CountryID, T.isHidden FROM Tournaments T
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID

COMMIT
GO
/****** Object:  StoredProcedure [dbo].[DeleteUser]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create PROCEDURE [dbo].[DeleteUser] @ID int
AS
Begin Transaction

Declare @UserID int;
Select @UserID = UserID from [dbo].[SysUser] where UserID = @ID

if(@UserID) != 0
begin
DELETE FROM SysUser WHERE UserID = @ID
end
else
Print 'User Does Not Exist'
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[InsertBet]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[InsertBet] @amount decimal(18,2), @UserId int, @EventID int, @MarketID int
as

Insert into Bets 
	(Amount, UserID, EventID, MarketID)
	values (@amount, @UserId ,@EventID, @MarketID)

declare @ID int;
set @ID = SCOPE_IDENTITY();

exec SelectBetByID @ID
GO
/****** Object:  StoredProcedure [dbo].[InsertBetType]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[InsertBetType] @Name varchar(50), @ForeignKey int
as

Insert into BetTypes
	(BetName, EventID)
	values (@Name, @ForeignKey)

declare @ID int;
set @ID = SCOPE_IDENTITY();

SELECT B.ID, B.BetName, B.EventID, E.EventName FROM BetTypes B
left join Events E on E.ID = B.EventID where B.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[InsertCountry]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[InsertCountry] @Name varchar(50), @ForeignKey int
as

Insert into Countries 
	(CountryName, SportID, isHidden)
	values (@Name, @ForeignKey, 'false')

declare @ID int;
set @ID = SCOPE_IDENTITY();

SELECT C.ID, C.CountryName, C.SportID, S.SportName, C.isHidden FROM Countries C
left join Sports S on S.ID = C.SportID where C.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[InsertEvent]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[InsertEvent] @Name varchar(50), @sport int, @country int, @tour int, @date Date
as

Insert into Events 
	(EventName, SportID, CountryID, TournamentID, Date, isHidden)
	values (@Name, @sport, @country, @tour, @date, 'false')

declare @ID int;
set @ID = SCOPE_IDENTITY();

SELECT E.ID, E.EventName, S.SportName, E.SportID, C.CountryName, E.CountryID, T.TournamentName, E.TournamentID, Date, E.isHidden FROM Events E
left join Tournaments T on T.ID = E.TournamentID 
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID where E.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[InsertMarket]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertMarket] @OddOne decimal(18, 2), @OddTwo decimal(18, 2), @Draw decimal(18, 2), @Key int
AS
BEGIN TRANSACTION
INSERT INTO Markets( OddOne, OddTwo, Draw, BetID) values ( @OddOne, @OddTwo, @Draw, @Key)

declare @ID int;
set @ID = SCOPE_IDENTITY();

exec SelectMarketByID @ID
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[InsertSport]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[InsertSport] @Name varchar(50)
as

Insert into Sports 
	(SportName, isHidden)
	values (@Name, 'false')

declare @ID int;
set @ID = SCOPE_IDENTITY();

select ID, SportName, isHidden from Sports where ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[InsertTournament]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[InsertTournament] @Name varchar(50), @sport int, @country int
as

Insert into Tournaments 
	(TournamentName, SportID, CountryID, isHidden)
	values (@Name, @sport, @country, 'false')

declare @ID int;
set @ID = SCOPE_IDENTITY();

SELECT T.ID, TournamentName, S.SportName, S.ID as SportID, C.CountryName, T.CountryID, T.isHidden FROM Tournaments T
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID where T.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[InsertUser]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertUser] @Name nvarchar(50),@pass nvarchar(30)
AS
begin
INSERT INTO Users(UserName, Password, Balance) values (@Name,@pass, 100.00)

declare @ID int;
set @ID = SCOPE_IDENTITY();

select * from Users where ID = @ID

end
GO
/****** Object:  StoredProcedure [dbo].[InsertUsers]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create PROCEDURE [dbo].[InsertUsers] @Name nvarchar(50),@pass nvarchar(30), @Bal decimal(18,2)
AS
begin
INSERT INTO Users(UserName, Password, Balance) values (@Name,@pass, @Bal)

declare @ID int;
set @ID = SCOPE_IDENTITY();

select * from Users where ID = @ID

end
GO
/****** Object:  StoredProcedure [dbo].[SelectBet]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectBet]
AS
SELECT B.ID, b.UserID, U.UserName,B.Amount, B.EventID, Be.BetName, E.EventName, B.MarketID FROM Bets B
left join Markets M on M.ID = B.MarketID
left join BetTypes Be on Be.ID = M.BetID
left join Events E on E.ID = B.EventID
left join Users U on U.ID = B.UserID
GO
/****** Object:  StoredProcedure [dbo].[SelectBetByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectBetByID] @ID int
AS
SELECT B.ID, b.UserID, U.UserName,B.Amount, B.EventID, Be.BetName, E.EventName, B.MarketID FROM Bets B
left join Markets M on M.ID = B.MarketID
left join BetTypes Be on Be.ID = M.BetID
left join Events E on E.ID = B.EventID
left join Users U on U.ID = B.UserID where B.ID = @ID

GO
/****** Object:  StoredProcedure [dbo].[SelectBetType]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SelectBetType]
AS

SELECT B.ID, B.BetName, B.EventID, E.EventName FROM BetTypes B
left join Events E on E.ID = B.EventID
GO
/****** Object:  StoredProcedure [dbo].[SelectBetTypeByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectBetTypeByID] @ID int
as 

SELECT B.ID, B.BetName, B.EventID, E.EventName FROM BetTypes B
left join Events E on E.ID = B.EventID where B.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[SelectCountries]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SelectCountries]
AS
SELECT C.ID, C.CountryName, C.SportID, S.SportName, C.isHidden FROM Countries C
left join Sports S on S.ID = C.SportID

GO
/****** Object:  StoredProcedure [dbo].[SelectCountryByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectCountryByID] @ID int
as 
SELECT C.ID, C.CountryName, C.SportID, S.SportName, C.isHidden FROM Countries C
left join Sports S on S.ID = C.SportID where C.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[SelectEventByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectEventByID] @ID int
as 
SELECT E.ID, E.EventName, S.SportName, E.SportID, C.CountryName, E.CountryID, T.TournamentName, E.TournamentID, E.Date, E.isHidden FROM Events E
left join Tournaments T on T.ID = E.TournamentID 
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID where E.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[SelectEvents]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectEvents]
AS
SELECT E.ID, E.EventName, S.SportName, E.SportID, C.CountryName, E.CountryID, T.TournamentName, E.TournamentID, E.Date,E.isHidden FROM Events E
left join Tournaments T on T.ID = E.TournamentID 
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID
GO
/****** Object:  StoredProcedure [dbo].[SelectMarketByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectMarketByID] @ID int
as 
SELECT M.ID, M.OddOne, M.OddTwo, M.Draw, M.BetID, B.BetName FROM Markets M
left join BetTypes B on B.ID = M.BetID where M.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[SelectMarkets]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SelectMarkets]
AS
SELECT M.ID, M.OddOne, M.OddTwo, M.Draw, M.BetID, B.BetName FROM Markets M
left join BetTypes B on B.ID = M.BetID

GO
/****** Object:  StoredProcedure [dbo].[SelectSportByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create procedure [dbo].[SelectSportByID] @ID int
as 
select * from Sports where ID = @ID;
GO
/****** Object:  StoredProcedure [dbo].[SelectSports]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectSports]
AS
SELECT ID, SportName, isHidden FROM Sports
GO;
GO
/****** Object:  StoredProcedure [dbo].[SelectTournamentByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectTournamentByID] @ID int
as 

SELECT T.ID, TournamentName, S.SportName, S.ID as SportID, C.CountryName, T.CountryID, T.isHidden FROM Tournaments T
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID where T.ID = @ID
GO
/****** Object:  StoredProcedure [dbo].[SelectTournaments]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectTournaments]
AS
SELECT T.ID, TournamentName, S.SportName, S.ID as SportID, C.CountryName, T.CountryID, T.isHidden FROM Tournaments T
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID

GO
/****** Object:  StoredProcedure [dbo].[SelectUser]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectUser]
as 
select * from Users;
GO
/****** Object:  StoredProcedure [dbo].[SelectUserByID]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SelectUserByID] @name nvarchar(50), @pass nvarchar(30)
as 
select ID, UserName, Password, Balance from Users where UserName = @name and Password = @pass;
GO
/****** Object:  StoredProcedure [dbo].[UpdateBetType]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateBetType] @ID int, @Name nvarchar(50)
AS
Begin Transaction
UPDATE BetTypes 
SET 
BetName = @Name
WHERE ID = @ID


SELECT B.ID, B.BetName, B.EventID, E.EventName FROM BetTypes B
left join Events E on E.ID = B.EventID
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[UpdateCountry]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateCountry] @ID int, @Name nvarchar(50)
AS
Begin Transaction
UPDATE Countries 
SET 
CountryName = @Name
WHERE ID = @ID

SELECT C.ID, C.CountryName, C.SportID, S.SportName, C.isHidden FROM Countries C
left join Sports S on S.ID = C.SportID
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[UpdateEvent]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateEvent] @ID int, @Name nvarchar(50)
AS
Begin Transaction
UPDATE Events 
SET 
EventName = @Name
WHERE ID = @ID

SELECT E.ID, E.EventName, S.SportName, E.SportID, C.CountryName, E.CountryID, T.TournamentName, E.TournamentID, E.Date, E.isHidden FROM Events E
left join Tournaments T on T.ID = E.TournamentID 
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID

COMMIT
GO
/****** Object:  StoredProcedure [dbo].[UpdateMarket]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateMarket] @ID int, @OddOne decimal(18, 2), @OddTwo decimal(18, 2), @Draw decimal(18, 2)
AS
Begin Transaction
UPDATE Markets 
SET 
OddOne = @OddOne,
OddTwo = @OddTwo,
Draw = @Draw
WHERE ID = @ID

Exec SelectMarkets
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[UpdateSport]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateSport] @ID int, @Name nvarchar(50)
AS
Begin Transaction
UPDATE Sports 
SET 
SportName = @Name
WHERE ID = @ID;

select * from Sports
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[UpdateTournament]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateTournament] @ID int, @Name nvarchar(50)
AS
Begin Transaction
UPDATE Tournaments 
SET 
TournamentName = @Name
WHERE ID = @ID

SELECT T.ID, TournamentName, S.SportName, T.SportID, C.CountryName, T.CountryID, T.isHidden FROM Tournaments T
left join Countries C on C.ID = T.CountryID
left join Sports S on S.ID = C.SportID
COMMIT
GO
/****** Object:  StoredProcedure [dbo].[UpdateUser]    Script Date: 2018/11/19 09:32:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateUser] @ID int, @balance decimal(18,2)
AS
begin
Update Users
set Balance = @balance
where ID = @ID

Select * from Users where ID = @ID
end 
GO
