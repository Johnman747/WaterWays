
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin_level" INTEGER NOT NULL
);
Table "locations" {
  "id" SERIAL PRIMARY KEY,
  "name" varchar(120)
  "address" varchar(1000)
  "latitude" float8,
  "longitude" float8,
  "created_by" INT references "user".id,
  "free_true" boolean,
  "spickett" boolean,
  "trail_access" boolean,
  "road_access" boolean,
  "campground_access" boolean,
  "free _flowing" boolean,
  "artesian_well" boolean,
  "photo_primary" varchar,
  "description" varchar
}
Table "activity_log" {
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user".id,
  "location_id" INT references "locations".id,
  "issue_comment" varchar(120),
  "issue_type" varchar
}

Table "Photos" {
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user".id,
  "location_id" INT references "locations".id,
  "photo_img_string" varchar
}

Table "reviews" {
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user".id,
  "location_id" INT references "locations".id,
  "comment" varchar,
  "review_score_of_five" int(5)
}
