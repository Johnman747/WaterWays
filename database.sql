
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin_level" INTEGER NOT NULL
);
CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(120),
  "address" varchar(1000),
  "latitude" float8,
  "longitude" float8,
  "created_by" INTEGER references "user",
  "free" boolean,
  "spigot" boolean,
  "trail_access" boolean,
  "road_access" boolean,
  "campground_access" boolean,
  "free_flowing" boolean,
  "artesian_well" boolean,
  "photo" varchar,
  "description" varchar
);
CREATE Table "activity_log" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user",
  "location_id" INT references "locations",
  "issue_comment" varchar(120),
  "issue_type" varchar
);

CREATE Table "Photos" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user",
  "location_id" INT references "locations",
  "photo_img_string" varchar
);

CREATE Table "reviews" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user",
  "location_id" INT references "locations",
  "comment" varchar,
  "review_score_of_five" int
);

