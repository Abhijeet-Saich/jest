-- 1️⃣ Add new DATE columns
ALTER TABLE `title-prod`.SP_Lien_Judgement
ADD COLUMN Dated_Date_New DATE NULL AFTER Dated_Date,
ADD COLUMN Rec_Date_New DATE NULL AFTER Rec_Date;

-- 2️⃣ Populate new columns
UPDATE `title-prod`.SP_Lien_Judgement AS lj
SET 
  lj.Dated_Date_New = DATE(lj.Dated_Date),
  lj.Rec_Date_New   = DATE(lj.Rec_Date);

-- 3️⃣ Check mismatches
SELECT COUNT(*) AS mismatch_count
FROM `title-prod`.SP_Lien_Judgement AS lj
WHERE DATE(lj.Dated_Date) <> lj.Dated_Date_New
   OR DATE(lj.Rec_Date) <> lj.Rec_Date_New;

-- 4️⃣ Check unexpected NULL errors
SELECT COUNT(*) AS null_errors
FROM `title-prod`.SP_Lien_Judgement AS lj
WHERE (lj.Dated_Date IS NOT NULL AND lj.Dated_Date_New IS NULL)
   OR (lj.Rec_Date IS NOT NULL AND lj.Rec_Date_New IS NULL);


-- 6️⃣ Drop original DATETIME columns
ALTER TABLE `title-prod`.SP_Lien_Judgement
DROP COLUMN Dated_Date,
DROP COLUMN Rec_Date;

-- 7️⃣ Rename new columns to original names
ALTER TABLE `title-prod`.SP_Lien_Judgement
CHANGE COLUMN Dated_Date_New Dated_Date DATE NULL,
CHANGE COLUMN Rec_Date_New   Rec_Date   DATE NULL;
