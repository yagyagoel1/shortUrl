-- CreateTable
CREATE TABLE "Url" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClicksInfo" (
    "id" TEXT NOT NULL,
    "ViewIp" TEXT NOT NULL,
    "ViewDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "urlId" TEXT NOT NULL,

    CONSTRAINT "ClicksInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClicksInfo" ADD CONSTRAINT "ClicksInfo_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
