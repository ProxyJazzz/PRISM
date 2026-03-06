import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProposalModel = runtime.Types.Result.DefaultSelection<Prisma.$ProposalPayload>;
export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null;
    _avg: ProposalAvgAggregateOutputType | null;
    _sum: ProposalSumAggregateOutputType | null;
    _min: ProposalMinAggregateOutputType | null;
    _max: ProposalMaxAggregateOutputType | null;
};
export type ProposalAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    aiProposalId: number | null;
};
export type ProposalSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    aiProposalId: number | null;
};
export type ProposalMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    fileName: string | null;
    aiProposalId: number | null;
    uploadDate: Date | null;
    status: string | null;
};
export type ProposalMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    fileName: string | null;
    aiProposalId: number | null;
    uploadDate: Date | null;
    status: string | null;
};
export type ProposalCountAggregateOutputType = {
    id: number;
    userId: number;
    fileName: number;
    aiProposalId: number;
    uploadDate: number;
    status: number;
    _all: number;
};
export type ProposalAvgAggregateInputType = {
    id?: true;
    userId?: true;
    aiProposalId?: true;
};
export type ProposalSumAggregateInputType = {
    id?: true;
    userId?: true;
    aiProposalId?: true;
};
export type ProposalMinAggregateInputType = {
    id?: true;
    userId?: true;
    fileName?: true;
    aiProposalId?: true;
    uploadDate?: true;
    status?: true;
};
export type ProposalMaxAggregateInputType = {
    id?: true;
    userId?: true;
    fileName?: true;
    aiProposalId?: true;
    uploadDate?: true;
    status?: true;
};
export type ProposalCountAggregateInputType = {
    id?: true;
    userId?: true;
    fileName?: true;
    aiProposalId?: true;
    uploadDate?: true;
    status?: true;
    _all?: true;
};
export type ProposalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProposalWhereInput;
    orderBy?: Prisma.ProposalOrderByWithRelationInput | Prisma.ProposalOrderByWithRelationInput[];
    cursor?: Prisma.ProposalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProposalCountAggregateInputType;
    _avg?: ProposalAvgAggregateInputType;
    _sum?: ProposalSumAggregateInputType;
    _min?: ProposalMinAggregateInputType;
    _max?: ProposalMaxAggregateInputType;
};
export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
    [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProposal[P]> : Prisma.GetScalarType<T[P], AggregateProposal[P]>;
};
export type ProposalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProposalWhereInput;
    orderBy?: Prisma.ProposalOrderByWithAggregationInput | Prisma.ProposalOrderByWithAggregationInput[];
    by: Prisma.ProposalScalarFieldEnum[] | Prisma.ProposalScalarFieldEnum;
    having?: Prisma.ProposalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProposalCountAggregateInputType | true;
    _avg?: ProposalAvgAggregateInputType;
    _sum?: ProposalSumAggregateInputType;
    _min?: ProposalMinAggregateInputType;
    _max?: ProposalMaxAggregateInputType;
};
export type ProposalGroupByOutputType = {
    id: number;
    userId: number;
    fileName: string;
    aiProposalId: number | null;
    uploadDate: Date;
    status: string;
    _count: ProposalCountAggregateOutputType | null;
    _avg: ProposalAvgAggregateOutputType | null;
    _sum: ProposalSumAggregateOutputType | null;
    _min: ProposalMinAggregateOutputType | null;
    _max: ProposalMaxAggregateOutputType | null;
};
type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProposalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProposalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProposalGroupByOutputType[P]>;
}>>;
export type ProposalWhereInput = {
    AND?: Prisma.ProposalWhereInput | Prisma.ProposalWhereInput[];
    OR?: Prisma.ProposalWhereInput[];
    NOT?: Prisma.ProposalWhereInput | Prisma.ProposalWhereInput[];
    id?: Prisma.IntFilter<"Proposal"> | number;
    userId?: Prisma.IntFilter<"Proposal"> | number;
    fileName?: Prisma.StringFilter<"Proposal"> | string;
    aiProposalId?: Prisma.IntNullableFilter<"Proposal"> | number | null;
    uploadDate?: Prisma.DateTimeFilter<"Proposal"> | Date | string;
    status?: Prisma.StringFilter<"Proposal"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    analysis?: Prisma.XOR<Prisma.ProposalAnalysisNullableScalarRelationFilter, Prisma.ProposalAnalysisWhereInput> | null;
};
export type ProposalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    analysis?: Prisma.ProposalAnalysisOrderByWithRelationInput;
};
export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProposalWhereInput | Prisma.ProposalWhereInput[];
    OR?: Prisma.ProposalWhereInput[];
    NOT?: Prisma.ProposalWhereInput | Prisma.ProposalWhereInput[];
    userId?: Prisma.IntFilter<"Proposal"> | number;
    fileName?: Prisma.StringFilter<"Proposal"> | string;
    aiProposalId?: Prisma.IntNullableFilter<"Proposal"> | number | null;
    uploadDate?: Prisma.DateTimeFilter<"Proposal"> | Date | string;
    status?: Prisma.StringFilter<"Proposal"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    analysis?: Prisma.XOR<Prisma.ProposalAnalysisNullableScalarRelationFilter, Prisma.ProposalAnalysisWhereInput> | null;
}, "id">;
export type ProposalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.ProposalCountOrderByAggregateInput;
    _avg?: Prisma.ProposalAvgOrderByAggregateInput;
    _max?: Prisma.ProposalMaxOrderByAggregateInput;
    _min?: Prisma.ProposalMinOrderByAggregateInput;
    _sum?: Prisma.ProposalSumOrderByAggregateInput;
};
export type ProposalScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProposalScalarWhereWithAggregatesInput | Prisma.ProposalScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProposalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProposalScalarWhereWithAggregatesInput | Prisma.ProposalScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Proposal"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Proposal"> | number;
    fileName?: Prisma.StringWithAggregatesFilter<"Proposal"> | string;
    aiProposalId?: Prisma.IntNullableWithAggregatesFilter<"Proposal"> | number | null;
    uploadDate?: Prisma.DateTimeWithAggregatesFilter<"Proposal"> | Date | string;
    status?: Prisma.StringWithAggregatesFilter<"Proposal"> | string;
};
export type ProposalCreateInput = {
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
    user: Prisma.UserCreateNestedOneWithoutProposalsInput;
    analysis?: Prisma.ProposalAnalysisCreateNestedOneWithoutProposalInput;
};
export type ProposalUncheckedCreateInput = {
    id?: number;
    userId: number;
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
    analysis?: Prisma.ProposalAnalysisUncheckedCreateNestedOneWithoutProposalInput;
};
export type ProposalUpdateInput = {
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProposalsNestedInput;
    analysis?: Prisma.ProposalAnalysisUpdateOneWithoutProposalNestedInput;
};
export type ProposalUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    analysis?: Prisma.ProposalAnalysisUncheckedUpdateOneWithoutProposalNestedInput;
};
export type ProposalCreateManyInput = {
    id?: number;
    userId: number;
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
};
export type ProposalUpdateManyMutationInput = {
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProposalUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProposalListRelationFilter = {
    every?: Prisma.ProposalWhereInput;
    some?: Prisma.ProposalWhereInput;
    none?: Prisma.ProposalWhereInput;
};
export type ProposalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProposalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrder;
    uploadDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProposalAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrder;
};
export type ProposalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrder;
    uploadDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProposalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrder;
    uploadDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProposalSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    aiProposalId?: Prisma.SortOrder;
};
export type ProposalScalarRelationFilter = {
    is?: Prisma.ProposalWhereInput;
    isNot?: Prisma.ProposalWhereInput;
};
export type ProposalCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProposalCreateWithoutUserInput, Prisma.ProposalUncheckedCreateWithoutUserInput> | Prisma.ProposalCreateWithoutUserInput[] | Prisma.ProposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProposalCreateOrConnectWithoutUserInput | Prisma.ProposalCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProposalCreateManyUserInputEnvelope;
    connect?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
};
export type ProposalUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProposalCreateWithoutUserInput, Prisma.ProposalUncheckedCreateWithoutUserInput> | Prisma.ProposalCreateWithoutUserInput[] | Prisma.ProposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProposalCreateOrConnectWithoutUserInput | Prisma.ProposalCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProposalCreateManyUserInputEnvelope;
    connect?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
};
export type ProposalUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProposalCreateWithoutUserInput, Prisma.ProposalUncheckedCreateWithoutUserInput> | Prisma.ProposalCreateWithoutUserInput[] | Prisma.ProposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProposalCreateOrConnectWithoutUserInput | Prisma.ProposalCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProposalUpsertWithWhereUniqueWithoutUserInput | Prisma.ProposalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProposalCreateManyUserInputEnvelope;
    set?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    disconnect?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    delete?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    connect?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    update?: Prisma.ProposalUpdateWithWhereUniqueWithoutUserInput | Prisma.ProposalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProposalUpdateManyWithWhereWithoutUserInput | Prisma.ProposalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProposalScalarWhereInput | Prisma.ProposalScalarWhereInput[];
};
export type ProposalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProposalCreateWithoutUserInput, Prisma.ProposalUncheckedCreateWithoutUserInput> | Prisma.ProposalCreateWithoutUserInput[] | Prisma.ProposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProposalCreateOrConnectWithoutUserInput | Prisma.ProposalCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProposalUpsertWithWhereUniqueWithoutUserInput | Prisma.ProposalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProposalCreateManyUserInputEnvelope;
    set?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    disconnect?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    delete?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    connect?: Prisma.ProposalWhereUniqueInput | Prisma.ProposalWhereUniqueInput[];
    update?: Prisma.ProposalUpdateWithWhereUniqueWithoutUserInput | Prisma.ProposalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProposalUpdateManyWithWhereWithoutUserInput | Prisma.ProposalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProposalScalarWhereInput | Prisma.ProposalScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProposalCreateNestedOneWithoutAnalysisInput = {
    create?: Prisma.XOR<Prisma.ProposalCreateWithoutAnalysisInput, Prisma.ProposalUncheckedCreateWithoutAnalysisInput>;
    connectOrCreate?: Prisma.ProposalCreateOrConnectWithoutAnalysisInput;
    connect?: Prisma.ProposalWhereUniqueInput;
};
export type ProposalUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: Prisma.XOR<Prisma.ProposalCreateWithoutAnalysisInput, Prisma.ProposalUncheckedCreateWithoutAnalysisInput>;
    connectOrCreate?: Prisma.ProposalCreateOrConnectWithoutAnalysisInput;
    upsert?: Prisma.ProposalUpsertWithoutAnalysisInput;
    connect?: Prisma.ProposalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProposalUpdateToOneWithWhereWithoutAnalysisInput, Prisma.ProposalUpdateWithoutAnalysisInput>, Prisma.ProposalUncheckedUpdateWithoutAnalysisInput>;
};
export type ProposalCreateWithoutUserInput = {
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
    analysis?: Prisma.ProposalAnalysisCreateNestedOneWithoutProposalInput;
};
export type ProposalUncheckedCreateWithoutUserInput = {
    id?: number;
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
    analysis?: Prisma.ProposalAnalysisUncheckedCreateNestedOneWithoutProposalInput;
};
export type ProposalCreateOrConnectWithoutUserInput = {
    where: Prisma.ProposalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProposalCreateWithoutUserInput, Prisma.ProposalUncheckedCreateWithoutUserInput>;
};
export type ProposalCreateManyUserInputEnvelope = {
    data: Prisma.ProposalCreateManyUserInput | Prisma.ProposalCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ProposalUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProposalWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProposalUpdateWithoutUserInput, Prisma.ProposalUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProposalCreateWithoutUserInput, Prisma.ProposalUncheckedCreateWithoutUserInput>;
};
export type ProposalUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProposalWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProposalUpdateWithoutUserInput, Prisma.ProposalUncheckedUpdateWithoutUserInput>;
};
export type ProposalUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ProposalScalarWhereInput;
    data: Prisma.XOR<Prisma.ProposalUpdateManyMutationInput, Prisma.ProposalUncheckedUpdateManyWithoutUserInput>;
};
export type ProposalScalarWhereInput = {
    AND?: Prisma.ProposalScalarWhereInput | Prisma.ProposalScalarWhereInput[];
    OR?: Prisma.ProposalScalarWhereInput[];
    NOT?: Prisma.ProposalScalarWhereInput | Prisma.ProposalScalarWhereInput[];
    id?: Prisma.IntFilter<"Proposal"> | number;
    userId?: Prisma.IntFilter<"Proposal"> | number;
    fileName?: Prisma.StringFilter<"Proposal"> | string;
    aiProposalId?: Prisma.IntNullableFilter<"Proposal"> | number | null;
    uploadDate?: Prisma.DateTimeFilter<"Proposal"> | Date | string;
    status?: Prisma.StringFilter<"Proposal"> | string;
};
export type ProposalCreateWithoutAnalysisInput = {
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
    user: Prisma.UserCreateNestedOneWithoutProposalsInput;
};
export type ProposalUncheckedCreateWithoutAnalysisInput = {
    id?: number;
    userId: number;
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
};
export type ProposalCreateOrConnectWithoutAnalysisInput = {
    where: Prisma.ProposalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProposalCreateWithoutAnalysisInput, Prisma.ProposalUncheckedCreateWithoutAnalysisInput>;
};
export type ProposalUpsertWithoutAnalysisInput = {
    update: Prisma.XOR<Prisma.ProposalUpdateWithoutAnalysisInput, Prisma.ProposalUncheckedUpdateWithoutAnalysisInput>;
    create: Prisma.XOR<Prisma.ProposalCreateWithoutAnalysisInput, Prisma.ProposalUncheckedCreateWithoutAnalysisInput>;
    where?: Prisma.ProposalWhereInput;
};
export type ProposalUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: Prisma.ProposalWhereInput;
    data: Prisma.XOR<Prisma.ProposalUpdateWithoutAnalysisInput, Prisma.ProposalUncheckedUpdateWithoutAnalysisInput>;
};
export type ProposalUpdateWithoutAnalysisInput = {
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProposalsNestedInput;
};
export type ProposalUncheckedUpdateWithoutAnalysisInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProposalCreateManyUserInput = {
    id?: number;
    fileName: string;
    aiProposalId?: number | null;
    uploadDate?: Date | string;
    status: string;
};
export type ProposalUpdateWithoutUserInput = {
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    analysis?: Prisma.ProposalAnalysisUpdateOneWithoutProposalNestedInput;
};
export type ProposalUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    analysis?: Prisma.ProposalAnalysisUncheckedUpdateOneWithoutProposalNestedInput;
};
export type ProposalUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    aiProposalId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProposalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    fileName?: boolean;
    aiProposalId?: boolean;
    uploadDate?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    analysis?: boolean | Prisma.Proposal$analysisArgs<ExtArgs>;
}, ExtArgs["result"]["proposal"]>;
export type ProposalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    fileName?: boolean;
    aiProposalId?: boolean;
    uploadDate?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposal"]>;
export type ProposalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    fileName?: boolean;
    aiProposalId?: boolean;
    uploadDate?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposal"]>;
export type ProposalSelectScalar = {
    id?: boolean;
    userId?: boolean;
    fileName?: boolean;
    aiProposalId?: boolean;
    uploadDate?: boolean;
    status?: boolean;
};
export type ProposalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "fileName" | "aiProposalId" | "uploadDate" | "status", ExtArgs["result"]["proposal"]>;
export type ProposalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    analysis?: boolean | Prisma.Proposal$analysisArgs<ExtArgs>;
};
export type ProposalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProposalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Proposal";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        analysis: Prisma.$ProposalAnalysisPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        fileName: string;
        aiProposalId: number | null;
        uploadDate: Date;
        status: string;
    }, ExtArgs["result"]["proposal"]>;
    composites: {};
};
export type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProposalPayload, S>;
export type ProposalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProposalCountAggregateInputType | true;
};
export interface ProposalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Proposal'];
        meta: {
            name: 'Proposal';
        };
    };
    findUnique<T extends ProposalFindUniqueArgs>(args: Prisma.SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProposalFindFirstArgs>(args?: Prisma.SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProposalFindManyArgs>(args?: Prisma.SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProposalCreateArgs>(args: Prisma.SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProposalCreateManyArgs>(args?: Prisma.SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProposalDeleteArgs>(args: Prisma.SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProposalUpdateArgs>(args: Prisma.SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProposalDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProposalUpdateManyArgs>(args: Prisma.SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProposalUpsertArgs>(args: Prisma.SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma.Prisma__ProposalClient<runtime.Types.Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProposalCountArgs>(args?: Prisma.Subset<T, ProposalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProposalCountAggregateOutputType> : number>;
    aggregate<T extends ProposalAggregateArgs>(args: Prisma.Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>;
    groupBy<T extends ProposalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProposalGroupByArgs['orderBy'];
    } : {
        orderBy?: ProposalGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProposalFieldRefs;
}
export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    analysis<T extends Prisma.Proposal$analysisArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proposal$analysisArgs<ExtArgs>>): Prisma.Prisma__ProposalAnalysisClient<runtime.Types.Result.GetResult<Prisma.$ProposalAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProposalFieldRefs {
    readonly id: Prisma.FieldRef<"Proposal", 'Int'>;
    readonly userId: Prisma.FieldRef<"Proposal", 'Int'>;
    readonly fileName: Prisma.FieldRef<"Proposal", 'String'>;
    readonly aiProposalId: Prisma.FieldRef<"Proposal", 'Int'>;
    readonly uploadDate: Prisma.FieldRef<"Proposal", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Proposal", 'String'>;
}
export type ProposalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where: Prisma.ProposalWhereUniqueInput;
};
export type ProposalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where: Prisma.ProposalWhereUniqueInput;
};
export type ProposalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where?: Prisma.ProposalWhereInput;
    orderBy?: Prisma.ProposalOrderByWithRelationInput | Prisma.ProposalOrderByWithRelationInput[];
    cursor?: Prisma.ProposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalScalarFieldEnum | Prisma.ProposalScalarFieldEnum[];
};
export type ProposalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where?: Prisma.ProposalWhereInput;
    orderBy?: Prisma.ProposalOrderByWithRelationInput | Prisma.ProposalOrderByWithRelationInput[];
    cursor?: Prisma.ProposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalScalarFieldEnum | Prisma.ProposalScalarFieldEnum[];
};
export type ProposalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where?: Prisma.ProposalWhereInput;
    orderBy?: Prisma.ProposalOrderByWithRelationInput | Prisma.ProposalOrderByWithRelationInput[];
    cursor?: Prisma.ProposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalScalarFieldEnum | Prisma.ProposalScalarFieldEnum[];
};
export type ProposalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProposalCreateInput, Prisma.ProposalUncheckedCreateInput>;
};
export type ProposalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProposalCreateManyInput | Prisma.ProposalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProposalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    data: Prisma.ProposalCreateManyInput | Prisma.ProposalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProposalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProposalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProposalUpdateInput, Prisma.ProposalUncheckedUpdateInput>;
    where: Prisma.ProposalWhereUniqueInput;
};
export type ProposalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProposalUpdateManyMutationInput, Prisma.ProposalUncheckedUpdateManyInput>;
    where?: Prisma.ProposalWhereInput;
    limit?: number;
};
export type ProposalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProposalUpdateManyMutationInput, Prisma.ProposalUncheckedUpdateManyInput>;
    where?: Prisma.ProposalWhereInput;
    limit?: number;
    include?: Prisma.ProposalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProposalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where: Prisma.ProposalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProposalCreateInput, Prisma.ProposalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProposalUpdateInput, Prisma.ProposalUncheckedUpdateInput>;
};
export type ProposalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
    where: Prisma.ProposalWhereUniqueInput;
};
export type ProposalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProposalWhereInput;
    limit?: number;
};
export type Proposal$analysisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalAnalysisSelect<ExtArgs> | null;
    omit?: Prisma.ProposalAnalysisOmit<ExtArgs> | null;
    include?: Prisma.ProposalAnalysisInclude<ExtArgs> | null;
    where?: Prisma.ProposalAnalysisWhereInput;
};
export type ProposalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProposalSelect<ExtArgs> | null;
    omit?: Prisma.ProposalOmit<ExtArgs> | null;
    include?: Prisma.ProposalInclude<ExtArgs> | null;
};
export {};
